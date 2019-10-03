import { Forbidden } from '@feathersjs/errors';

export class NotAuthorizedError extends Forbidden {
  constructor() {
    super(`Not authorized`);
    this.name = 'NotAuthorizedError';
  }
}
