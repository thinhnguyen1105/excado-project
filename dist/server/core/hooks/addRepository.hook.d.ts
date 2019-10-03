import { Repository, Aggregate } from '@app/core';
import { HookContext } from '@feathersjs/feathers';
export declare const addRepository: <T extends Aggregate>(repository: Repository<T>) => (context: HookContext<any>) => Promise<void>;
