import { FindQuery } from '@app/core';
export interface FindShopQuery extends FindQuery {
    search?: string;
    isActive?: string;
    owner?: string;
}
