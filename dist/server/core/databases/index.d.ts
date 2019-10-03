/// <reference types="mongoose" />
import { ObjectId, Schema, model } from './mongo.database';
export declare const mongoDatabase: {
    addIsAuditableSchema: (schema: import("mongoose").SchemaDefinition) => import("mongoose").SchemaDefinition;
    addIsDeletableSchema: (schema: import("mongoose").SchemaDefinition) => import("mongoose").SchemaDefinition;
    ObjectId: typeof ObjectId;
    Schema: typeof Schema;
    model: typeof model;
    getPaginationResult: <T extends import("..").Aggregate>(query: import("..").PaginationQuery, mongoQuery: import("mongoose").DocumentQuery<import("mongoose").Document[], import("mongoose").Document, {}>) => Promise<{
        edges: {
            node: T;
        }[];
        pageInfo: {
            hasNextPage: boolean;
            endCursor: string | undefined;
        };
    } | {
        edges: {
            node: T;
        }[];
        pageInfo: {
            hasNextPage?: undefined;
            endCursor?: undefined;
        };
    }>;
    startDatabase: (connectionString: string) => Promise<void>;
};
