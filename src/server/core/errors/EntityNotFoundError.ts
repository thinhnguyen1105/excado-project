import { BadRequest } from '@feathersjs/errors';
export class EntityNotFoundError extends BadRequest {
  constructor(entityName = 'Entity') {
    super(`${entityName ? entityName : 'Entity'} not found`);
    this.name = 'EntityNotFoundError';
  }
}
