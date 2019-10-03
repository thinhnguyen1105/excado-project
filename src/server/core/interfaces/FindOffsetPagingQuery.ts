export interface FindOffsetPagingQuery {
  pageSize: number;
  pageNumber: number;
  sortBy: string; // fieldName|order, sample: username|asc
}
