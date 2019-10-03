import { BadRequest } from '@feathersjs/errors';
export declare class NewsInputError extends BadRequest {
    constructor(message: string);
}
