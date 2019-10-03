import { BadRequest } from '@feathersjs/errors';
export class ModelInputError extends BadRequest {
  constructor(message: string) {
    super(message);
    this.name = 'ModelInputError';
  }
}
