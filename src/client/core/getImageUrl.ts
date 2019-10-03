export const getImageUrl = (imageUrl: string, imageType: 'large'|'small') => {
  return imageUrl ? imageUrl.indexOf('imageshack') > -1 ? imageUrl : imageUrl.indexOf('.jpg') === -1 && imageUrl.indexOf('.png') === -1 ? `${imageUrl}-${imageType}.jpg` : imageUrl : '';
};
