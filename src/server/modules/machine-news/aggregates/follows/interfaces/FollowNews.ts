import { Aggregate } from '@app/core';

export interface FollowNews extends Aggregate {
  news: any;
  user: any;
  createdAt: number;
}
