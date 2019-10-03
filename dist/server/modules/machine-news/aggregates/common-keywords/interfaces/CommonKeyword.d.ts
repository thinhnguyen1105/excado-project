import { Aggregate } from '@app/core';
export interface CommonKeyword extends Aggregate {
    _id?: string;
    keyword: string;
    count: number;
    createdAt: number;
    lastModifiedAt: number;
}
