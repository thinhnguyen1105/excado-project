import { BadRequest } from '@feathersjs/errors';
export declare class UserInputError extends BadRequest {
    constructor(message: string);
}
