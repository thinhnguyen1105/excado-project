import { Repository, FindResult } from '@app/core';
import { User, FindUsersQuery, UpdateFollower, FollowUserQuery, CheckFollow } from '@app/auth';

export interface UsersRepository extends Repository<User> {
  getAll: () => Promise<User[]>;
  find: (query: FindUsersQuery) => Promise<FindResult<User>>;
  follow: (payload: UpdateFollower) => Promise<void>;
  unfollow: (payload: UpdateFollower) => Promise<void>;
  findFollowByUser: (query: FollowUserQuery) => Promise<FindResult<User>>;
  checkFollow: (payload: CheckFollow) => Promise<any>;
  increaseFollowCount: (id: string) => Promise<void>;
  decreaseFollowCount: (id: string) => Promise<void>;
}
