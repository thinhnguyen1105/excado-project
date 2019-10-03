import { createModel, ModelConfig } from '@rematch/core';
import { ProfileState, OpenModalPayload } from './interface';

const profileModel: ModelConfig<ProfileState> = createModel({
  state: {
    modal: {
      login: false,
      register: false,
    },
    authUser: null,
  },
  reducers: {
    openModal: (state: ProfileState, payload: OpenModalPayload): ProfileState => {
      return {
        ...state,
        modal: {
          ...state.modal,
          [payload.modalName]: true,
        },
      };
    },
    closeModal: (state: ProfileState, payload: OpenModalPayload): ProfileState => {
      return {
        ...state,
        modal: {
          ...state.modal,
          [payload.modalName]: false,
        },
      };
    },
    changeModal: (state: ProfileState): ProfileState => {
      return {
        ...state,
        modal: {
          login: !state.modal.login,
          register: !state.modal.register,
        },
      };
    },
    updateProfileInfo: (state: ProfileState, payload: any) => {
      return {
        ...state,
        authUser: {
          ...state.authUser,
          ...payload,
        },
      };
    },
  },
  effects: {},
});

export default profileModel;
