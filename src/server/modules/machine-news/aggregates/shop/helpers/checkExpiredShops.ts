import * as cron from 'node-cron';
import { ShopModel } from '../shop.repository';

// tslint:disable: no-console
export const checkFinishedSessionsJob = cron.schedule('0 0 0 * * *', async () => {
  try {
    console.log('Start checking expired shop ...');

    const result = await ShopModel.updateMany({expiryDate: {$lte: new Date().getTime()}}, {$set: {isActive: false}});

    console.log('Finished checking expired shop.', result);
  } catch (error) {
    console.log('Check expired shops', error);
  }
});
