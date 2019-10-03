
import * as elasticsearch from 'elasticsearch';
import { config } from '@app/config';
let elasticClient: any;

const getElasticInstance = () => {
  if (elasticClient) {
    return elasticClient;
  }
  elasticClient = new elasticsearch.Client({
    host: config.elasticsearch.host,
  });
  return elasticClient;
};

export { getElasticInstance };
