import { BadRequest } from '@feathersjs/errors';
export class ProvinceInputError extends BadRequest {
  constructor(message: string) {
    super(message);
    this.name = 'ProvinceInputError';
  }
}
