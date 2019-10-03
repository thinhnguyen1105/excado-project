import { newsRepository } from '@app/machine-news';
import { MostFollowsService } from './interfaces/MostFollowService';
import { MostFollowQuery } from '../news/interfaces/MostFollowQuery';
import { RequestParams } from '@app/core';

const mostFollowService: MostFollowsService = {
  find: async (params: RequestParams<any> & { query: MostFollowQuery }) => {
    return await newsRepository.searchNewsHaveMostFollower(params.query);
  },
};
export default mostFollowService;
