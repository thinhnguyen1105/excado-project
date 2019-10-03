import { getServiceProxy } from '@client/services';
import { config } from '@client/config';

export const checkSubdomain = async (req: any, res: any, next: any) => {
  if (req.subdomains && req.subdomains.length > 0) {
    let shopDomain = '';
    if (config.url.main === `https://timmay.vn` && req.subdomains[0] !== `www`) {
      shopDomain = req.subdomains[0];
    } else if (config.url.main === `https://test.timmay.vn` && req.subdomains[1] !== `www`) {
      shopDomain = req.subdomains[1];
    } else if (config.url.main.indexOf(`techkids.io`) > -1 && req.subdomains[1] !== `www`) {
      shopDomain = req.subdomains[1];
    } else if (req.subdomains[0] !== `www`) {
      shopDomain = req.subdomains[0];
    }

    if (shopDomain) {
      const authUserId = req.authUser ? req.authUser.id : '';
      const serviceProxies = getServiceProxy();
      const shopResult = await serviceProxies.findShopByDomain(shopDomain, authUserId);

      if (shopResult && shopResult.isActive) {
        req.shopInfo = shopResult;
        const allowPaths = ['/thong-tin-cua-hang', '/bai-dang-cua-hang'];
        if (allowPaths.indexOf(req.url) > -1 || req.url.indexOf('/bai-dang-cua-hang') > -1) {
          next();
        } else {
          res.redirect('/thong-tin-cua-hang');
        }
      } else {
        // custom 404 page
        res.redirect(`${config.url.main}/not-found`);
      }
    } else {
      next();
    }
  } else {
    next();
  }
};
