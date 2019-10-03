import * as express from 'express';
import sharp from 'sharp';
import { imageService } from '@app/website';
import { productImageMiddleware } from './multer/productImage.middleware';
import { shopImageMiddleware } from './multer/shopImage.middleware';
import { config } from '@app/config';
import { remove } from 'fs-extra';

const uploadRouter = express.Router();
const path = process.cwd();
uploadRouter.post('/', productImageMiddleware.single('image'), async (req: any, res) => {
  try {
    if (req.file) {
      if (req.file.filename) {
        const lastDot = req.file.filename.lastIndexOf('.');
        const fileHash = req.file.filename.slice(0, lastDot).trim();

        await imageService.create({
          name: req.file.filename,
          url: req.file.filename,
        });

        // Resize
        await sharp(`${path}/temp/${req.file.filename}`).resize(300).toFormat('jpg').toFile(`${path}/temp/${fileHash}-small.jpg`);
        await sharp(`${path}/temp/${req.file.filename}`).resize(900).toFormat('jpg').toFile(`${path}/temp/${fileHash}-large.jpg`);
        res.status(200).send(`${req.file.filename}`);
      }
    } else {
      res.status(200).end();
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/shop-intro-images', shopImageMiddleware.array('introImage', config.upload.shopIntroImageNumber), async (req: any, res) => {
  try {
    if (req.files) {
      const moveFilePromises: any[] = [];
      const introImages: string[] = [];
      req.files.forEach((file: any) => {
        const lastDot = file.filename.lastIndexOf('.');
        const fileHash = file.filename.slice(0, lastDot).trim();
        moveFilePromises.push(sharp(`${path}/temp/${file.filename}`).resize(null, 600).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`));
        moveFilePromises.push(remove(`${path}/temp/${file.filename}`));
        introImages.push(`/upload/${fileHash}.jpg`);
      });
      await Promise.all(moveFilePromises);

      res.status(200).json({
        introImages,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/shop-logo-image', shopImageMiddleware.array('logoImage'), async (req: any, res) => {
  try {
    if (req.files && req.files[0]) {
      const lastDot = req.files[0].filename.lastIndexOf('.');
      const fileHash = req.files[0].filename.slice(0, lastDot).trim();
      await sharp(`${path}/temp/${req.files[0].filename}`).resize(200, 200).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`);
      await remove(`${path}/temp/${req.files[0].filename}`);

      res.status(200).json({
        logoImage: `/upload/${fileHash}.jpg`,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/avatar-image', shopImageMiddleware.array('avatarImage'), async (req: any, res) => {
  try {
    if (req.files && req.files[0]) {
      const lastDot = req.files[0].filename.lastIndexOf('.');
      const fileHash = req.files[0].filename.slice(0, lastDot).trim();
      await sharp(`${path}/temp/${req.files[0].filename}`).resize(200, 200).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`);
      await remove(`${path}/temp/${req.files[0].filename}`);

      res.status(200).json({
        avatarUrl: `/upload/${fileHash}.jpg`,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/brand-logo-image', shopImageMiddleware.array('brandLogoImage'), async (req: any, res) => {
  try {
    if (req.files && req.files[0]) {
      const lastDot = req.files[0].filename.lastIndexOf('.');
      const fileHash = req.files[0].filename.slice(0, lastDot).trim();
      await sharp(`${path}/temp/${req.files[0].filename}`).resize(null, 60).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`);
      await remove(`${path}/temp/${req.files[0].filename}`);

      res.status(200).json({
        logoImage: `/upload/${fileHash}.jpg`,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/category-image', shopImageMiddleware.array('categoryImage'), async (req: any, res) => {
  try {
    if (req.files && req.files[0]) {
      const lastDot = req.files[0].filename.lastIndexOf('.');
      const fileHash = req.files[0].filename.slice(0, lastDot).trim();
      await sharp(`${path}/temp/${req.files[0].filename}`).resize(null, 179).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`);
      await remove(`${path}/temp/${req.files[0].filename}`);

      res.status(200).json({
        categoryImage: `/upload/${fileHash}.jpg`,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/feature-brand-logo-image', shopImageMiddleware.array('featureBrandLogoImage'), async (req: any, res) => {
  try {
    if (req.files && req.files[0]) {
      const lastDot = req.files[0].filename.lastIndexOf('.');
      const fileHash = req.files[0].filename.slice(0, lastDot).trim();
      await sharp(`${path}/temp/${req.files[0].filename}`).resize(null, 60).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`);
      await remove(`${path}/temp/${req.files[0].filename}`);

      res.status(200).json({
        logoImage: `/upload/${fileHash}.jpg`,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

uploadRouter.post('/adsense-image', shopImageMiddleware.array('adsenseImage'), async (req: any, res) => {
  try {
    if (req.files && req.files[0]) {
      const smallPositions = [1, 4];
      const mediumPositions = [5, 6, 7, 8];
      const lastDot = req.files[0].filename.lastIndexOf('.');
      const fileHash = req.files[0].filename.slice(0, lastDot).trim();
      const adsHeight = smallPositions.indexOf(Number(req.body.adsensePosition)) > -1 ? 60 : mediumPositions.indexOf(Number(req.body.adsensePosition)) > -1 ? 200 : 400;
      await sharp(`${path}/temp/${req.files[0].filename}`).resize(null, adsHeight).toFormat('jpg').toFile(`${path}/upload/${fileHash}.jpg`);
      await remove(`${path}/temp/${req.files[0].filename}`);

      res.status(200).json({
        adsenseImage: `/upload/${fileHash}.jpg`,
      });
    } else {
      res.status(400).send('File not found');
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

export const imageRouter = uploadRouter;
