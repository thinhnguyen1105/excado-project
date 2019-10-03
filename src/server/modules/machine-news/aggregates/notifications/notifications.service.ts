import { NotificationsService } from '@app/machine-news';
import { NotAuthenticatedError, validateQuery, ensureOwner, UserInputError, validateOperation, EntityNotFoundError } from '@app/core';
import * as yup from 'yup';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';
import { newsRepository } from '../news/news.repository';
import { reportsRepository } from '../reports/reports.repository';

const notificationStates = ['READ', 'UNREAD'];
const notificationTypes = ['FOLLOW_USER', 'FOLLOW_SHOP', 'CREATE_NEWS', 'DELETE_NEWS', 'WARN_NEWS'];
const notificationsService: NotificationsService = {
  find: async ({ query, repository, authUser }) => {
    // 1. authorize
    if (!authUser || ! authUser.id) {
      throw new NotAuthenticatedError();
    }

    // 2. validate
    validateQuery(query);

    // 3. do business logic

    // 4. persist to db
    return await repository.find({
      ...query,
      owner: authUser.id,
    } as any);
  },
  get: async (id, params) => {
    // 1. authorize
    ensureOwner(params.authUser, id);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid id');
    }

    // 3. do business logic

    // 4. persist to db
    const unreadNotifications = await params.repository.countUnreadNotifications(id);
    return {
      unreadNotifications,
    } as any;
  },
  create: async (data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    const validationSchema = yup.object().shape({
      owner: yup.string().required('Owner is required'),
      news: yup.string(),
      report: yup.string(),
      description: yup.string(),
      state: yup.string().required('State type is required').oneOf(notificationStates),
      type: yup.string().required('Notification type is required').oneOf(notificationTypes),
    });
    await validationSchema.validate(data);
    if (data.news) {
      const existedNews = await newsRepository.findById(data.news as any);
      if (!existedNews) {
        throw new UserInputError('News not found');
      }
    }
    if (data.report) {
      const existedReport = await reportsRepository.findById(data.report);
      if (!existedReport) {
        throw new UserInputError('Report not found');
      }
    }

    // 3. do business logic

    // 4. persist to db
    const id = await params.repository.create({
      ...data,
      ...params.creationInfo,
    });
    return {
      id,
    };
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['readAllNotifications', 'readNotification']);
    await notificationsService[data.operation](id, data.payload, params);
    return {};
  },
  readAllNotifications: async (id, _data, params) => {
    // 1. authorize
    ensureOwner(params.authUser, id);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid user id');
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.readAllNotifications(id);
  },
  readNotification: async (id, data, params) => {
    // 1. authorize
    ensureOwner(params.authUser, id);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid user id');
    }
    const existedNotification = await params.repository.findById(data.notificationId);
    if (!existedNotification) {
      throw new EntityNotFoundError('Notification');
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id: existedNotification._id,
      state: 'READ',
      readAt: new Date().getTime(),
    });
  },
};

export default notificationsService;
