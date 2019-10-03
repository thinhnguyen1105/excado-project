import { SearchFilters } from '@client/store';
export declare const generateSearchUrl: (filters: SearchFilters & {
    minWeight?: number | undefined;
    maxWeight?: number | undefined;
}) => string;
