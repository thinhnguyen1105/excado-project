import { Repository, Aggregate } from '@app/core';
import { HookContext } from '@feathersjs/feathers';
export declare const addAdditionalRepository: <T extends Aggregate>(repository: Repository<T>, repositoryName: string) => (context: HookContext<any>) => Promise<void>;
