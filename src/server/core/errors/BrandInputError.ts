import { BadRequest } from '@feathersjs/errors';
export class BrandInputError extends BadRequest {
  constructor(message: string) {
    super(message);
    this.name = 'BrandInputError';
  }
}
