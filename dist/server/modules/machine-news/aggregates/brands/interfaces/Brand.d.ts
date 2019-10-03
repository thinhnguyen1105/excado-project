import { Aggregate, IsAuditable } from '@app/core';
export interface Brand extends Aggregate, IsAuditable {
    slug: string;
    name: string;
    logoImage: string;
    totalNews: number;
}
