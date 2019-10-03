import slugify from 'slugify';
export const changeToSlug = (title: string) => {
  return slugify(title).replace(/-/g, ' ') + ' ';
};
