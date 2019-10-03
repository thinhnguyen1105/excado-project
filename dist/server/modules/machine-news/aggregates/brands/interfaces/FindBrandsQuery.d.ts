import { FindQuery } from '@app/core';
export interface FindBrandsQuery extends FindQuery {
    search?: string;
}
