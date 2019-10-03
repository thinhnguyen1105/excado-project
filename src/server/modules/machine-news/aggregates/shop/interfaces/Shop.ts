import { Aggregate, IsAuditable } from '../../../../../core';

export interface Shop extends Aggregate, IsAuditable {
  _id: string;
  owner: any;
  domain: string;
  name: string;
  address: string;
  geocode: {
    lng: number;
    lat: number;
  };
  description: string;
  phone: string;
  email: string;
  logoImage: string;
  introImages: string[];
  shop: any[];
  isActive: boolean;
  expiryDate: number;
  followBy: string[];
  isFollowing: boolean;
  counterFollow: number;
}
