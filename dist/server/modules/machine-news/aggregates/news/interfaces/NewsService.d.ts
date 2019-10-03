import { Service, RequestParams } from '@app/core';
import { News, NewsRepository } from '@app/machine-news';
import { FindNewsQuery } from './FindNewsQuery';
import { Application } from '@feathersjs/express';
export interface NewsService extends Service<News, FindNewsQuery, NewsRepository> {
    setup?: (app: Application<any>, path: string) => void;
    updatePending: (id: string, data: Partial<News>, params: RequestParams<NewsRepository>) => Promise<{}>;
    updateFollowCount: (newsId: string, type: 'follow' | 'unfollow') => void;
    getByOwner: (req: any, res: any) => void;
    getStatisticsInfo: (req: any, res: any) => void;
}
