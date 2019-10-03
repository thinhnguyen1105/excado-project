import admin from 'firebase-admin';
import { config } from '@app/config';

(async () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.firebase.serviceAccount['project_id'],
      clientEmail: config.firebase.serviceAccount['client_email'],
      privateKey: config.firebase.serviceAccount['private_key'],
    }),
    databaseURL: config.firebase.databaseURL,
  });

  await admin.auth().setCustomUserClaims('qUOIT2GUPaatiDqOiqIbeaMgNEO2', {
    roles: ['5c7f747708898183ac62f2af'],
    permissions: [
      'USERS.VIEW',
      'USERS.CREATE',
      'USERS.EDIT',
      'USERS.DELETE',
      'ROLES.VIEW',
      'ROLES.CREATE',
      'ROLES.EDIT',
      'ROLES.DELETE',
      'NEWS.VIEW',
      'NEWS.CREATE',
      'NEWS.EDIT',
      'NEWS.DELETE',
      'NEWS.VIEW_PENDING',
      'NEWS.CREATE_PENDING',
      'NEWS.EDIT_PENDING',
      'NEWS.DELETE_PENDING',
      'NEWS.VIEW_PUBLIC',
      'NEWS.CREATE_PUBLIC',
      'NEWS.EDIT_PUBLIC',
      'NEWS.DELETE_PUBLIC',
      'USER.FOLLOW',
      'USER.UNFOLLOW',
      'SHOPS.VIEW',
      'SHOPS.CREATE',
      'SHOPS.EDIT',
      'SHOPS.DELETE',
      'REPORTS.REPORTS',
      'REPORTS.CREATE',
      'REPORTS.EDIT',
      'REPORTS.DELETE',
    ],
    avatarUrl: '',
  });

  // tslint:disable-next-line:no-console
  console.log('Update Roles Successful');
  process.exit();
})();
