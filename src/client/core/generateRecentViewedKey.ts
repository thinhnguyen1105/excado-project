import { v4 } from 'uuid';
import { config } from '@client/config';

const recentViewedCookie = 'recent_viewed';
export const generateRecentViewedKey = (req: any, res: any, next: any) => {
  if (!req.cookies[recentViewedCookie]) {
    const recentViewedKey = v4();
    res.cookie(recentViewedCookie, recentViewedKey, {domain: config.cookies.domain});
  }
  next();
};
