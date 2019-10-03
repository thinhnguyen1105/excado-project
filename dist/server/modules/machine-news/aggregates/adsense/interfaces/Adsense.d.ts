import { Aggregate } from '@app/core';
declare type AdsensePosition = 1 | 2 | 3 | 4 | 5 | 6;
export interface Adsense extends Aggregate {
    _id: string;
    position: AdsensePosition;
    imageUrl: string;
    hyperlink: string;
}
export {};
