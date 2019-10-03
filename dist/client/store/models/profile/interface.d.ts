export interface AuthUser {
    id: string;
    fullName: string;
    avatarUrl: string;
    province?: string;
    roles: string;
    permissions: string;
    shopDomain?: string;
}
export interface ProfileState {
    modal: {
        login: boolean;
        register: boolean;
    };
    authUser: AuthUser | null;
}
export interface ProfileReducers {
    openModal: (payload: OpenModalPayload) => void;
    closeModal: (payload: OpenModalPayload) => void;
    changeModal: () => void;
    updateProfileInfo: (payload: any) => void;
}
export interface ProfileEffects {
}
export interface OpenModalPayload {
    modalName: 'login' | 'register';
}
