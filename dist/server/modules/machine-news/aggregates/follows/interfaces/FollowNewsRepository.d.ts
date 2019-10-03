import { FollowNews } from './FollowNews';
export interface FollowNewsRepository {
    findFollowsByUser: (userId: string) => Promise<FollowNews[]>;
    findOne: (query: {
        user: string;
        news: string;
    }) => Promise<FollowNews>;
    create: (payload: {
        user: string;
        news: string;
        createdAt: number;
    }) => Promise<string>;
    del: (payload: {
        user: string;
        news: string;
    }) => Promise<void>;
}
