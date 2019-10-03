export const isMobile = (req: any) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return (userAgent.match(/Android/i)
    || userAgent.match(/webOS/i)
    || userAgent.match(/iPhone/i)
    || userAgent.match(/iPad/i)
    || userAgent.match(/iPod/i)
    || userAgent.match(/BlackBerry/i)
    || userAgent.match(/Windows Phone/i)
  ) ? true : false;
};
