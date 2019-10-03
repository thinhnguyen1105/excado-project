import { BadRequest } from '@feathersjs/errors';
export class NewsInputError extends BadRequest {
  constructor(message: string) {
    super(message);
    this.name = 'NewsInputError';
  }
}
