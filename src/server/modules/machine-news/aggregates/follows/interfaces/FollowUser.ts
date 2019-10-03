import { Aggregate } from '@app/core';

export interface FollowUser extends Aggregate {
  followee: any;
  user: any;
  createdAt: number;
}
