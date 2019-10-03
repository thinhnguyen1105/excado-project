import { FollowUser } from './FollowUser';
export interface FollowUsersRepository {
    findByFollowee: (followeeId: string) => Promise<FollowUser[]>;
    findOne: (query: {
        user: string;
        followee: string;
    }) => Promise<FollowUser>;
    create: (payload: {
        user: string;
        followee: string;
        createdAt: number;
    }) => Promise<string>;
    del: (payload: {
        user: string;
        followee: string;
    }) => Promise<void>;
}
