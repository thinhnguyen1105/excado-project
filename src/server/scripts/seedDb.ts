import mongoose from 'mongoose';
import { config } from '@app/config';
import { readdir } from 'fs-extra';
import { rootLocation } from '@app/core';
import { roleRepository, userRepository } from '@app/auth';
import admin from 'firebase-admin';

const createAdministratorRole = async () => {
  const rootDir = `${rootLocation}/server/modules`;
  const moduleNames = await readdir(rootDir);
  const excludedModules: string[] = ['.DS_Store'];
  const permissions: string[] = [];

  for (const moduleName of moduleNames) {
    if (excludedModules.indexOf(moduleName) !== -1) {
      continue;
    }
    const permissionsURL = `../modules/${moduleName}/permissions`;
    try {
      const modulePermissions: any = require(permissionsURL).PERMISSIONS;
      Object.keys(modulePermissions).forEach((aggregate) => {
        Object.keys(modulePermissions[aggregate]).forEach((item) => permissions.push(modulePermissions[aggregate][item]));
      });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }

  const administrator = {
    name: 'admin',
    description: 'Site administrator',
    permissions,
    isDefault: false,
    isActive: true,
  };

  return await roleRepository.create(administrator as any);
};

const createAdministratorUser = async (administratorRoleId: string) => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.firebase.serviceAccount['project_id'],
      clientEmail: config.firebase.serviceAccount['client_email'],
      privateKey: config.firebase.serviceAccount['private_key'],
    }),
    databaseURL: config.firebase.databaseURL,
  });

  const newUser = await admin.auth().createUser({
    email: 'admin@timmay.vn',
    emailVerified: true,
    password: 'timmayadmin',
    displayName: 'Timmay Admin',
  });

  const administratorRole = await roleRepository.findById(administratorRoleId);

  await admin.auth().setCustomUserClaims(newUser.uid, {
    roles: [(administratorRole as any)._id],
    permissions: administratorRole.permissions,
    avatarUrl: '',
    province: '',
  });

  await userRepository.create({
    id: newUser.uid,
    email: newUser.email,
    phoneNo: newUser.phoneNumber,
    familyName: 'Timmay',
    givenName: 'Admin',
    fullName: 'Timmay Admin',
    loginDetail: {
        email: newUser.email,
        provider: 'email',
      } as any,
    roles: [(administratorRole as any)._id],
    createdAt: new Date().getTime(),
    createdBy: 'timmay-admin',
    isActive: true,
    completeSignUp: false,
  } as any);
};

(async () => {
    await mongoose.connect(config.database.connectionString, { useNewUrlParser: true });
    const administratorRoleId = await createAdministratorRole();
    await createAdministratorUser(administratorRoleId);

    process.exit();
})();
