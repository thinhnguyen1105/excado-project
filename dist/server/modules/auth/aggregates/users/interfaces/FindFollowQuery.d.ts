import { FindQuery } from '@app/core';
export interface FindFollowsQuery extends FindQuery {
    type: string;
    id: string;
}
