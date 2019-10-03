import { FindQuery } from '@app/core';
export interface FindRecentViewedQuery extends FindQuery {
    uuid?: string;
    user?: string;
}
