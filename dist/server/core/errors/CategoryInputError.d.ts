import { BadRequest } from '@feathersjs/errors';
export declare class CategoryInputError extends BadRequest {
    constructor(message: string);
}
