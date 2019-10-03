import { RequestParams } from '@app/core';
import { AuthCreatePayload, UsersRepository, RolesRepository } from '@app/auth';
import { Application } from '@feathersjs/express';
export interface AuthService {
    setup: (app: Application<any>, path: string) => void;
    create: (data: AuthCreatePayload, params: RequestParams<UsersRepository> & {
        roleRepository: RolesRepository;
    }) => Promise<{}>;
    getCustomToken: (req: any, res: any) => void;
    updatePassword: (req: any, res: any) => void;
}
