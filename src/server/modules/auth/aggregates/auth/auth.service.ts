import admin from 'firebase-admin';
import { User, AuthService } from '@app/auth';
import { union } from 'lodash';
import { logger } from '@app/core';
import replace from 'lodash/replace';

const authService: AuthService = {
  setup: (app, path) => {
    app.post(path + '/get-custom-token', authService.getCustomToken);
    app.post(path + '/update-password', authService.updatePassword);
  },
  create: async (data, params) => {
    // 1. verify id token
    const verifyIdToken: any = await admin.auth().verifyIdToken(data.idToken);
    const userFirebaseInfo = await admin.auth().getUser(verifyIdToken.uid);

    // 2. add custom claims to firebase idToken
    const defaultRoles = await params.roleRepository.findDefaultRoles();
    if (!userFirebaseInfo.customClaims) {
      await admin.auth().setCustomUserClaims(verifyIdToken.uid, {
        roles: defaultRoles,
        permissions: defaultRoles ? union(defaultRoles.map((role) => role.permissions)) : [],
        avatarUrl: '',
        province: '',
      });
    }

    // 3. verify email if register with phone
    if (userFirebaseInfo.providerData[0].providerId === 'phone') {
      await admin.auth().updateUser(userFirebaseInfo.uid, {
        emailVerified: true,
      });
    }

    // 3. create new mongo user
    const existedUser = await params.repository.findById(verifyIdToken.uid);
    if (!existedUser) {
      const newUser: Partial<User> = {
        id: userFirebaseInfo.uid,
        email: userFirebaseInfo.providerData[0].providerId === 'phone' ? '' : userFirebaseInfo.email || userFirebaseInfo.providerData[0].email,
        phoneNo: userFirebaseInfo.phoneNumber,
        familyName: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].displayName : '',
        givenName: '',
        fullName: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].displayName : '',
        loginDetail: userFirebaseInfo.providerData[0].providerId === 'facebook.com'
          ? {
            uid: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].uid : '',
            email: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].email : '',
            provider: 'facebook',
          } : userFirebaseInfo.providerData[0].providerId === 'google.com' ? {
            uid: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].uid : '',
            email: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].email : '',
            provider: 'google',
          } : userFirebaseInfo.providerData[0].providerId === 'password' ? {
            email: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].email : '',
            provider: 'email',
          } : {
            phoneNo: userFirebaseInfo.phoneNumber,
            provider: 'phone',
          } as any,
        roles: defaultRoles.map((role) => role.id!),
        isActive: true,
        completeSignUp: false,
        createdBy: userFirebaseInfo.uid,
        createdAt: new Date().getTime(),
      };
      await params.repository.create(newUser as any);
    }

    return {};
  },
  getCustomToken: async (req: any, res: any) => {
    try {
      const { idToken } = req.body;
      const tokenInfo = await admin.auth().verifyIdToken(replace(idToken, 'Bearer ', ''));
      const customToken = await admin.auth().createCustomToken(tokenInfo.uid);
      res.status(200).json({customToken});
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  updatePassword: async (req, res) => {
    try {
      const { idToken, newPassword } = req.body;
      const tokenInfo = await admin.auth().verifyIdToken(idToken);
      await admin.auth().updateUser(tokenInfo.uid, {
        password: newPassword,
      });
      res.status(200).end();
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
};

export default authService;
