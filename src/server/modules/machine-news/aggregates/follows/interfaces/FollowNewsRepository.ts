import { FollowNews } from './FollowNews';
import { FindFollowsQuery } from '@app/machine-news';

export interface FollowNewsRepository {
  findFollowsByUser: (query: FindFollowsQuery) => Promise<FollowNews[]>;
  findOne: (query: {user: string; news: string}) => Promise<FollowNews>;
  create: (payload: {user: string; news: string; createdAt: number}) => Promise<string>;
  del: (payload: {user: string; news: string}) => Promise<void>;
  ensureIndexes: () => Promise<void>;
}
