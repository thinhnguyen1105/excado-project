import admin from 'firebase-admin';

export const authenticate = async (req: any, res: any, next: any) => {
  if (req.url.indexOf('/refresh-token') === -1) {
    const bearerToken = req.cookies.token || req.headers.authorization;
    if (bearerToken) {
      try {
        const token = bearerToken.replace('Bearer ', '');
        const tokenInfo = await admin.auth().verifyIdToken(token);

        req.authUser = {
          id: tokenInfo!.uid,
          fullName: tokenInfo.name,
          avatarUrl: tokenInfo.avatarUrl,
          province: tokenInfo.province,
          roles: tokenInfo.roles,
          permissions: tokenInfo.permissions,
        };

        next();
      } catch (error) {
        res.redirect('/refresh-token');
      }
    } else {
      next();
    }
  } else {
    next();
  }
};
