import { Aggregate, IsAuditable } from '@app/core';
export interface Model extends Aggregate, IsAuditable {
    slug: string;
    name: string;
    brand: string;
    category: string;
    totalNews: number;
}
