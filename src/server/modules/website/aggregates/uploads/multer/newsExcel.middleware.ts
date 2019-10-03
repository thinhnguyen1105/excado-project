import multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';
import * as uuid from 'uuid';
import { config } from '@app/config';

const excelFilter = (_req: any, file: any, cb: any) => {
  if (!file.originalname.match(config.upload.allowExcelExt)) {
    return cb(new Error('Only excel files are allowed'), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: async (_req: any, _file: any, cb: any) => {
    const fileFolder = path.join(__dirname, `../../../../../../../upload`);
    const fsAccessPromise = util.promisify(fs.access);
    try {
      await fsAccessPromise(fileFolder);
    } catch (error) {
      const fsMkdirPromise = util.promisify(fs.mkdir);
      await fsMkdirPromise(fileFolder);
    }
    cb(null, path.join(__dirname, `../../../../../../../upload`));
  },
  filename: async (_req: any, file: any, cb: any) => {
    const hash = uuid.v4();
    const lastDot = file.originalname.lastIndexOf('.');
    const fileType = file.originalname.slice(lastDot + 1).trim();
    cb(null, `${hash}.${fileType}`);
  },
});

export const newsExcelMiddleware = multer({
  storage,
  fileFilter: excelFilter,
});
