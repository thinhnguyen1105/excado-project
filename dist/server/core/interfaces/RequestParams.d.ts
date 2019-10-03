import { AuthUser, IsAuditable, IsDeletable } from '@app/core';
export interface RequestParams<TRepository> {
    repository: TRepository;
    authUser?: AuthUser;
    cookies?: any;
    creationInfo?: Partial<IsAuditable>;
    modificationInfo?: Partial<IsAuditable>;
    deleteInfo?: Partial<IsDeletable>;
    provider?: any;
    connection?: any;
}
