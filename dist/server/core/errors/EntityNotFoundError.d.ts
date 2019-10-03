import { BadRequest } from '@feathersjs/errors';
export declare class EntityNotFoundError extends BadRequest {
    constructor(entityName?: string);
}
