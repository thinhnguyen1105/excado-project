import { config } from '@client/config';

export const setCookie = async (req: any, res: any) => {
  const token = req.body.token;
  res.cookie('token', `Bearer ${token}`, {domain: config.cookies.domain}).redirect('/');
};
