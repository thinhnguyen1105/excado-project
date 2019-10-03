import { BadRequest } from '@feathersjs/errors';
export declare class ModelInputError extends BadRequest {
    constructor(message: string);
}
