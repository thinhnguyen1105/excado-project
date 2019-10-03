// tslint:disable
import mongoose from 'mongoose';
import * as provinceRepository from '../modules/machine-news/aggregates/provinces/provinces.repository';
import * as modelRepository from '../modules/machine-news/aggregates/models/models.repository';
import * as newsRepository from '../modules/machine-news/aggregates/news/news.repository';
import { config } from '../config';
import { shopRepository } from '@app/machine-news';
import { weightRangeRepository } from '../modules/machine-news/aggregates/weight-ranges/weight-ranges.repository';
import { rentalPeriodRepository } from '../modules/machine-news/aggregates/rental-periods/rental-periods.repository';

const randomString = () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const randomDate = () => {
  const start = new Date(2018, 10, 20);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

mongoose.connect(config.database.connectionString, { useNewUrlParser: true }, async (err) => {
  if (err) {
    console.log(err);
  }

  const [allModels, allProvinces, allShops, allWeightRange, allRentalPeriod] = await Promise.all([
    modelRepository.modelRepository.findAll(),
    provinceRepository.provinceRepository.find(),
    shopRepository.getAll(),
    weightRangeRepository.findAll(),
    rentalPeriodRepository.findAll(),
  ]);
  const allNewsType = ['SELL', 'BUY', 'RENT', 'LEASE'];
  const allState = ['NEW', 'USED', 'LIQUIDATE'];
  const allImages = [
    `/static/images/may-1.jpg`,
    `/static/images/may-2.jpg`,
    `/static/images/may-3.jpg`,
    `/static/images/may-4.jpg`,
    `/static/images/may-5.jpg`,
  ];

  const importNewsPromises = [];
  for (let item of allModels) {
    const model: any = item;
    const province: any = allProvinces.data[Math.floor(Math.random() * allProvinces.data.length)];
    const shop: any = allShops[Math.floor(Math.random() * allShops.length)];
    const newsType = allNewsType[Math.floor(Math.random() * allNewsType.length)];
    const newsState = allState[Math.floor(Math.random() * allState.length)];
    const weightRange = allWeightRange[Math.floor(Math.random() * allWeightRange.length)];
    const rentalPeriod = allRentalPeriod[Math.floor(Math.random() * allRentalPeriod.length)];
    const isSeller = ['SELL', 'LEASE'].indexOf(newsType) > -1;
    const year = Math.floor(Math.random() * (new Date().getFullYear() + 1 - 1900) + 1900);
    const serialNo = randomString();
    const createdDate = randomDate();
    let title = '';
    switch (newsType) {
      case 'SELL':
        title = `${year ? year : ''} ${model.brand.name.toUpperCase()} ${model.name} ${serialNo}`;
        break;
      case 'LEASE':
        title = `${year ? year : ''} ${model.brand.name.toUpperCase()} ${model.name} ${serialNo}`;
        break;
      case 'BUY':
        title = `Tìm mua ${model.brand.name.toUpperCase()} ${model.name}`;
        break;
      case 'RENT':
        title = `Tìm thuê ${model.brand.name.toUpperCase()} ${model.name}`;
        break;
      default:
        break;
    }

    importNewsPromises.push(newsRepository.newsRepository.create({
      title,
      state: newsState,
      newsType,
      priceType: 'FIXED',
      location: province._id,
      owner: shop.owner._id,
      shop: shop._id,
      status: 'PUBLIC',
      usedHours: Math.floor(Math.random() * 500) + 1,
      price: isSeller ? Math.floor(Math.random() * 10000000000) : undefined,
      serialNo,
      categoryId: model.category._id,
      brand: model.brand._id,
      model: model._id,
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin volutpat pharetra volutpat. Nulla dictum neque id sem venenatis, non consequat ipsum ultrices.
        In sed justo mi. Nulla malesuada quam id libero sodales tincidunt.
        Donec interdum molestie dolor, quis imperdiet dui blandit eu. Vestibulum et turpis eu nulla semper consequat ut vel mauris.
        Cras ac dictum libero.Sed feugiat nisl odio, at fermentum mi tempor dictum. Curabitur venenatis eget mauris a accumsan.

        Nullam tristique dolor quis sapien cursus, in consequat mauris malesuada.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Suspendisse id massa lacus. Nam lobortis ex eu urna mattis, non lacinia nisi sagittis.
        Cras pellentesque, lectus vel posuere imperdiet, nunc mauris porta nisl, eu scelerisque nunc elit sit amet nulla.
      `,
      year: isSeller ? year : undefined,
      weightRange: (weightRange as any)._id,
      rentalPeriod: !isSeller ? (rentalPeriod as any)._id : undefined,
      createdAt: createdDate.getTime(),
      createdDate,
      imageUrls: isSeller ? [allImages[Math.floor(Math.random() * allImages.length)]] : [],
    } as any));

    await Promise.all(importNewsPromises);
  }
  process.exit();
});