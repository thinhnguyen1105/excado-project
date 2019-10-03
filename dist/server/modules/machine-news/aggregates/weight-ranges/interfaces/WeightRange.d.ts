import { Aggregate } from '@app/core';
export interface WeightRange extends Aggregate {
    min: number;
    max?: number;
    createdAt: number;
}
