import * as express from 'express';
import { newsExcelMiddleware } from './multer/newsExcel.middleware';
import { uploadService } from './uploads.service';

const uploadsRouter = express.Router();

uploadsRouter.post('/news-excel', newsExcelMiddleware.single('newsExcel'), async (req: any, res) => {
  try {
    const result = await uploadService.uploadExcelFile(req.file, req.headers.authorization);
    res.status(200).json(result);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    res.status(error.status || 500).send({message: error.message || 'Internal Server Error'});
  }
});

export {
  uploadsRouter,
};
