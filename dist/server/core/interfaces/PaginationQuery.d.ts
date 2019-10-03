/**
 * Interface for pagination query
 */
export interface PaginationQuery {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    orderBy?: string;
    fields: string[];
}
