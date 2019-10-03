import { readdir } from 'fs-extra';
import { logger, isDev } from '@app/core';
import mongoose from 'mongoose';
import { config } from '@app/config';

// tslint:disable:no-console
const createIndexes = async () => {
  await mongoose.connect(config.database.connectionString, { useNewUrlParser: true });

  const moduleNames = await readdir(`${isDev ? 'src' : 'dist'}/server/modules`);
  const excludedModules: string[] = ['website', '.DS_Store'];
  const excludedAggregates: string[] = ['helpers', '.DS_Store'];

  const createIndexPromises = [];
  for (const module of moduleNames) {
    if (excludedModules.indexOf(module) !== -1) {
      continue;
    }

    const aggregateNames = await readdir(`${isDev ? 'src' : 'dist'}/server/modules/${module}/aggregates`);
    for (const aggregateName of aggregateNames) {
      if (excludedAggregates.indexOf(aggregateName) !== -1 || aggregateName.indexOf('index') === 0) {
        continue;
      }

      if (aggregateName === 'follows') {
        for (const item of ['news', 'shops', 'users']) {
          logger.info(`[Create Index] [${module}] [${aggregateName}] ...`);
          const serviceRepositoryUrl = `../modules/${module}/aggregates/follows/follow-${item}.repository`;
          try {
            const repository: any = require(serviceRepositoryUrl);
            const createRepoIndexes = repository[Object.keys(repository)[Object.keys(repository).length - 1]].ensureIndexes;
            if (createRepoIndexes) {
              createIndexPromises.push(createRepoIndexes());
            }
          } catch (error) {
            console.log(error.message);
          }
        }
      } else {
        logger.info(`[Create Index] [${module}] [${aggregateName}] ...`);
        const serviceRepositoryUrl = `../modules/${module}/aggregates/${aggregateName}/${aggregateName}.repository`;
        try {
          const repository: any = require(serviceRepositoryUrl);
          const createRepoIndexes = repository[Object.keys(repository)[Object.keys(repository).length - 1]].ensureIndexes;
          if (createRepoIndexes) {
            createIndexPromises.push(createRepoIndexes());
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  }

  try {
    await Promise.all(createIndexPromises);
  } catch (error) {
    console.log(error.message);
  }
  console.log('Create indexes success');
  process.exit();
};

createIndexes();
