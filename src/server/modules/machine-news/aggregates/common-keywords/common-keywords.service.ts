import { CommonKeywordService } from './interfaces/CommonKeywordService';
import { validateQuery, validatePayload } from '@app/core';
import * as yup from 'yup';
import { commonKeywordRepository } from './common-keywords.repository';

const commonKeywordService: CommonKeywordService = {
  find: async ({ query, repository }) => {
    // 1. authorize

    // 2. validate
    validateQuery(query);

    // 3. do business logic

    // 4. persist to db
    return await repository.find(query);
  },
  create: async (data) => {
    // 1. authorize

    // 2. validate
    await validatePayload({
      keyword: yup.string().required('News is required'),
    }, data);
    const existedKeyword = await commonKeywordRepository.findOne(data);
    if (existedKeyword) {
      await commonKeywordRepository.update({
        id: existedKeyword._id,
        count: Number(existedKeyword.count) + 1,
      });
    } else {
      await commonKeywordRepository.create({
        keyword: data.keyword,
        createdAt: new Date().getTime(),
        lastModifiedAt: new Date().getTime(),
        count: 1,
      });
    }
    return {} as any;
  },
};

export default commonKeywordService;
