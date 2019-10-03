import { ReportsService } from './interfaces/ReportsService';
import { validateQuery, UserInputError, validatePayload, EntityNotFoundError, validateOperation } from '@app/core';
import * as yup from 'yup';
import { ReportReason, ReportResult } from './interfaces/Report';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';
import { userRepository } from '@app/auth';
import { RecentViewedModel } from '@app/machine-news';
import { notificationsRepository } from '../notifications/notifications.repository';

const reportReasons: ReportReason[] = ['SOLD', 'VIOLATE', 'WRONG_INFO'];
const resolveResult: ReportResult[] = ['DELETE', 'SKIP', 'NOTIFY'];
const reportsService: ReportsService = {
  find: async ({ query, repository, authUser }) => {
    // 1. authorize
    await ensureAdmin(authUser);

    // 2. validate
    validateQuery(query);

    // 3. do business logic

    // 4. persist to db
    return await repository.find(query);
  },
  get: async (id, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid id');
    }

    // 3. do business logic

    // 4. persist to db
    return await params.repository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    ensureAuthenticate(params.authUser);

    // 2. validate
    await validatePayload({
      news: yup.string().required('News is required'),
      reason: yup.string().required('Reason is required').oneOf(reportReasons),
      description: yup.string().required('Description is required').min(10, 'Desciption is too short').max(500, 'Desciption is too long'),
    }, data);
    const [existedNews, userInfo] = await Promise.all([
      params.newsRepository.findById(data.news),
      userRepository.findById(params.authUser!.id),
    ]);
    if (!existedNews || existedNews.status !== 'PUBLIC') {
      throw new EntityNotFoundError('News');
    }
    if (!userInfo.email || !userInfo.phoneNo) {
      throw new UserInputError(`Please update email and phone number to create report`);
    }

    // 3. do business logic
    const existedReportOfNews = await params.repository.findOnePending({news: data.news});

    // 4. persist to db
    if (existedReportOfNews) {
      await params.repository.updateReport(existedReportOfNews._id!, {
        reason: data.reason,
        description: data.description,
        createdBy: params.authUser!.id,
        createdAt: new Date().getTime(),
      });

      return {
        id: existedReportOfNews._id!,
      };
    } else {
      const id = await params.repository.create({
        news: data.news,
        newsTitle: existedNews.title,
        reports: [{
          reason: data.reason,
          description: data.description,
          createdBy: params.authUser!.id,
          createdAt: new Date().getTime(),
        }],
        state: 'PENDING',
      });

      return {
        id,
      };
    }
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['resolveReport']);
    await reportsService[data.operation](id, data.payload, params);
    return {};
  },
  resolveReport: async (id, data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedReport = await params.repository.findById(id);
    if (!existedReport) {
      throw new EntityNotFoundError('Report');
    }
    const validationSchema = yup.object().shape({
      resolvedResult: yup.string().required('Result is required').oneOf(resolveResult),
    });
    await validationSchema.validate(data);

    // 3. do business logic
    if (data.resolvedResult === 'DELETE') {
      await Promise.all([
        params.newsRepository.update({
          _id: (existedReport.news as any)._id,
          status: 'DELETED',
          ...params.modificationInfo,
        }),
        RecentViewedModel.findOneAndUpdate({news: (existedReport.news as any)._id}, {$set: {newsStatus: 'DELETED'}}).exec(),
        notificationsRepository.create({
          owner: (existedReport.news as any).owner,
          state: 'UNREAD',
          news: existedReport.news,
          report: existedReport._id,
          type: 'DELETE_NEWS',
          createdAt: new Date().getTime(),
        } as any),
      ]);
    } else if (data.resolvedResult === 'NOTIFY') {
      await Promise.all([
        params.newsRepository.update({
          _id: (existedReport.news as any)._id,
          status: 'REJECTED',
          ...params.modificationInfo,
        }),
        RecentViewedModel.findOneAndUpdate({news: (existedReport.news as any)._id}, {$set: {newsStatus: 'REJECTED'}}).exec(),
        notificationsRepository.create({
          owner: (existedReport.news as any).owner,
          state: 'UNREAD',
          news: existedReport.news,
          report: existedReport._id,
          description: (data as any).description,
          type: 'WARN_NEWS',
          createdAt: new Date().getTime(),
        } as any),
      ]);
    }

    // 4. persist to db
    await params.repository.update({
      id: existedReport._id,
      state: 'RESOLVED',
      resolvedResult: data.resolvedResult,
      resolvedAt: new Date().getTime(),
      resolvedBy: params.authUser!.id,
    });
    return {};
  },
};

export default reportsService;
