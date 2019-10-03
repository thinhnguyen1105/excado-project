import { imageRepository } from '@app/website';
import * as fs from 'fs';
import { logger } from '@app/core';

export const imageService: any = {
  find: async (_params: any) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await imageRepository.find();
  },
  get: async (_id: string, _params: any) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await imageRepository.findById(_id);
  },
  create: async (data: Partial<any>, _params: any) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await imageRepository.create(data);
  },
  patch: async (_id: string, data: any, _params: any): Promise<void> => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    await imageRepository.update(data);
  },
  deleteByUrls : async (urls: any): Promise<void> => {
    if (urls && urls.length) {
      return await imageRepository.deleteByUrls(urls);
    }
  },
  moveFilesToUploadFolder : async (url: any): Promise<void> => {
    const path = process.cwd();
    const lastDot = url.lastIndexOf('.');
    const fileHash = url.slice(0, lastDot).trim();

    const smallPromise = new Promise((resolve, _reject) => {
      move(`${path}/temp/${fileHash}-small.jpg`, `${path}/upload/${fileHash}-small.jpg` , (err?: any) => {
        if (err) {
          _reject(err.message);
          logger.error(err);
        }
        resolve();
      });
    });

    const largePromise = new Promise((resolve, reject) => {
      move(`${path}/temp/${fileHash}-large.jpg`, `${path}/upload/${fileHash}-large.jpg` , (err?: any) => {
        if (err) {
          reject(err.message);
          // tslint:disable-next-line
          console.log('err', err);
        }
        resolve();
      });
    });

    return await Promise.all([smallPromise, largePromise]) as any;
  },
};

const move = (oldPath: any, newPath: any, callback: any) => {
  fs.rename(oldPath, newPath, (err: any) => {
    if (err) {
      logger.error(err);
      if (err.code === 'EXDEV') {
        copy();
      } else callback();
    }
    callback();
  });

  const copy = () => {
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', () => {
        fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
  };
};
