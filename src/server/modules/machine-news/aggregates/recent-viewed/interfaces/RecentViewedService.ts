import { RecentViewed } from './RecentViewed';
import { RecentViewedRepository } from './RecentViewedRepository';
import { Service } from '@app/core';
import { FindRecentViewedQuery } from './FindRecentViewedQuery';

export interface RecentViewedService extends Service<RecentViewed, FindRecentViewedQuery, RecentViewedRepository> {}
