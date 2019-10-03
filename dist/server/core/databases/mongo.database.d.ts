import { Schema, SchemaDefinition, model, DocumentQuery, Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Aggregate, PaginationQuery } from '@app/core';
export declare const startDatabase: (connectionString: string) => Promise<void>;
export declare const getId: () => string;
export declare const removeId: <T extends Aggregate>(entity: T) => T;
export declare const addIsAuditableSchema: (schema: SchemaDefinition) => SchemaDefinition;
export declare const addIsDeletableSchema: (schema: SchemaDefinition) => SchemaDefinition;
export declare const getPaginationResult: <T extends Aggregate>(query: PaginationQuery, mongoQuery: DocumentQuery<Document[], Document, {}>) => Promise<{
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
export { Schema, ObjectId, model, };
