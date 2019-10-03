import { Repository, FindResult } from '@app/core';
import { News, FindNewsQuery, FindFollowsQuery, SearchQuery, FindNewsESResult } from '@app/machine-news';
import { UpdateFollower } from '@app/auth';
import { MostFollowQuery } from './MostFollowQuery';
import { GetNewsByOwnerIdQuery } from './GetNewsByOwnerIdQuery';
import { FindNewsDetail } from './FindNewsDetail';
import { NewsStatisticsResult } from './NewsStatisticsResult';
export interface NewsRepository extends Repository<News> {
    searchNews: (query: SearchQuery) => Promise<FindNewsESResult>;
    find: (query: FindNewsQuery) => Promise<FindResult<News>>;
    follow: (payload: UpdateFollower) => Promise<void>;
    unfollow: (payload: UpdateFollower) => Promise<void>;
    findFollowByNews: (query: FindFollowsQuery) => Promise<FindResult<News>>;
    checkFollow: (newsId: string, userId: string) => Promise<any>;
    searchNewsHaveMostFollower: (query: MostFollowQuery) => Promise<any>;
    getNewsByOwnerId: (query: GetNewsByOwnerIdQuery) => Promise<FindResult<FindNewsDetail>>;
    increaseView: (id: string) => Promise<void>;
    increaseFollowCount: (id: string) => Promise<void>;
    decreaseFollowCount: (id: string) => Promise<void>;
    getStatisticsInfo: (startDate: string, endDate: string) => Promise<NewsStatisticsResult>;
}
