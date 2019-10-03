"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoDatabase = void 0;

var _mongo = require("./mongo.database");

var mongoDatabase = {
  addIsAuditableSchema: _mongo.addIsAuditableSchema,
  addIsDeletableSchema: _mongo.addIsDeletableSchema,
  ObjectId: _mongo.ObjectId,
  Schema: _mongo.Schema,
  model: _mongo.model,
  getPaginationResult: _mongo.getPaginationResult,
  startDatabase: _mongo.startDatabase
};
exports.mongoDatabase = mongoDatabase;
//# sourceMappingURL=index.js.map