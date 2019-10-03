import { IsAuditable, Aggregate } from '@app/core';

export type ShopExtendRequestState = 'PENDING' | 'FINISHED';

export interface ShopExtendRequest extends Aggregate, IsAuditable {
  _id?: string;
  package: string;
  shop: string;
  shopName: string;
  state: ShopExtendRequestState;
  requestedAt: number;
  requestedBy: string;
  extendedAt: number;
  extendedBy: string;
}
