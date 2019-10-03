import { Aggregate, IsAuditable } from '@app/core';
export interface News extends Aggregate, IsAuditable {
    _id: string;
    title: string;
    state: string;
    description: string;
    imageUrls: string[];
    price: number;
    priceType: string;
    newsType: string;
    owner: string;
    shop: string;
    location: string;
    status: string;
    usedHours: number;
    serialNo: string;
    categoryId: string;
    type: string;
    brand: string;
    model: string;
    weight: number;
    year: number;
    reviewedAt: Date;
    reviewedBy: string;
    followBy: string[];
    counterFollow: number;
    counterView: number;
    createdDate: Date;
}
