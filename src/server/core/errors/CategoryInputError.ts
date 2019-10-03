import { BadRequest } from '@feathersjs/errors';
export class CategoryInputError extends BadRequest {
  constructor(message: string) {
    super(message);
    this.name = 'CategoryInputError';
  }
}
