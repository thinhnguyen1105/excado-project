import { Service, FindQuery } from '@app/core';
import { CommonKeyword } from './CommonKeyword';
import { CommonKeywordRepository } from './CommonKeywordRepository';

export interface CommonKeywordService extends Service<CommonKeyword, FindQuery, CommonKeywordRepository> {}
