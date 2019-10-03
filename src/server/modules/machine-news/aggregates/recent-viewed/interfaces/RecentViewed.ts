import { News } from '../../news/interfaces/News';
import { Aggregate } from '@app/core';

export interface RecentViewed extends Aggregate {
  _id?: string;
  uuid?: string;
  user?: string;
  news: string|News;
  newsStatus: string;
  createdAt: number;
  lastModifiedAt: number;
}
