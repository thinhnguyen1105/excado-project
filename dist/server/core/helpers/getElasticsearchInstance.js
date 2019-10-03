"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElasticInstance = void 0;

var elasticsearch = _interopRequireWildcard(require("elasticsearch"));

var _config = require("../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var elasticClient;

var getElasticInstance = function getElasticInstance() {
  if (elasticClient) {
    return elasticClient;
  }

  elasticClient = new elasticsearch.Client({
    host: _config.config.elasticsearch.host
  });
  return elasticClient;
};

exports.getElasticInstance = getElasticInstance;
//# sourceMappingURL=getElasticsearchInstance.js.map