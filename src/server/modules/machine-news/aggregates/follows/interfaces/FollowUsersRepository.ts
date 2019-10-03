import { FollowUser } from './FollowUser';
import { FindFollowsQuery } from './FindFollowsQuery';
import { FindResult } from '@app/core';

export interface FollowUsersRepository {
  findFollowByUser: (query: FindFollowsQuery) => Promise<FindResult<FollowUser>>;
  findByFollowee: (followeeId: string) => Promise<FollowUser[]>;
  findOne: (query: {user: string; followee: string}) => Promise<FollowUser>;
  create: (payload: {user: string; followee: string; createdAt: number}) => Promise<string>;
  del: (payload: {user: string; followee: string}) => Promise<void>;
  ensureIndexes: () => Promise<void>;
}
