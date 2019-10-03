import { HookContext } from '@feathersjs/feathers';
import commonKeywordService from '../aggregates/common-keywords/common-keywords.service';

export const createCommonKeyword = async (context: HookContext) => {
  if (context.params.query && context.params.query.keyword) {
    const keyword = context.params.query.keyword;
    (commonKeywordService as any).create({keyword} as any, context.params as any);
  }
};
