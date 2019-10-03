import { ShopPackage } from './ShopPackage';
import { ShopPackageRepository } from './ShopPackageRepository';
import { Service } from '@app/core';

export interface ShopPackageService extends Service<ShopPackage, any, ShopPackageRepository> {}
