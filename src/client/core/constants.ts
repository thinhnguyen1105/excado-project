// PENDING / PUBLIC / STOPPED / REJECTED / DELETED
export const newsStatus = {
  PENDING: 'PENDING',
  PUBLIC: 'PUBLIC',
  STOPPED: 'STOPPED',
  REJECTED: 'REJECTED',
  DELETED: 'DELETED',
};

export const newsTypeConst = {
  SELL: 'SELL',
  LEASE: 'LEASE',
  BUY: 'BUY',
  RENT: 'RENT',
};

export const notificationState = {
  READ: 'READ',
  UNREAD: 'UNREAD',
};

export const reportResults = {
  SKIP: 'SKIP',
  DELETE: 'DELETE',
};

export const priceRanges = [
  { min: 100000000, max: 500000000 },
  { min: 500000000, max: 1000000000 },
  { min: 1000000000, max: 5000000000 },
  { min: 5000000000, max: 10000000000 },
  { min: 10000000000, max: 50000000000 },
];

export const newsStates = [
  { value: 'NEW', label: 'Mới' },
  { value: 'USED', label: 'Nhập bãi' },
  { value: 'LIQUIDATE', label: 'Thanh lý' },
];

export const newsTypes = [
  { value: 'SELL', label: 'Cần bán' },
  { value: 'LEASE', label: 'Cần cho thuê' },
  { value: 'BUY', label: 'Cần mua' },
  { value: 'RENT', label: 'Cần thuê' },
];

export const storePackages = [
  { label: '1', value: 86400 * 30 * 1000, price: 0, imageUrl: '' },
  { label: '3', value: 3 * 86400 * 30 * 1000, price: 300000, imageUrl: '/static/images/tag30k.png' },
  { label: '6', value: 6 * 86400 * 30 * 1000, price: 600000, imageUrl: '/static/images/tag50k.png' },
  { label: '12', value: 12 * 86400 * 30 * 1000, price: 1200000, imageUrl: '/static/images/tag990k.png' },
];

export const paymentMethods = [
  { label: 'Thẻ ngân hàng nội địa', value: 'domesticCard', imageUrl: ['/static/images/credit-card.png'] },
  { label: 'Thẻ quốc tế', value: 'globalCard', imageUrl: ['/static/images/Visa.png', '/static/images/Mastercard.png'] },
  { label: 'Ví momo', value: 'momoWallet', imageUrl: ['/static/images/momo.png'] },
];

export const reportReasons = [
  {label: 'Báo tin đã bán', value: 'SOLD'},
  {label: 'Báo tin vi phạm', value: 'VIOLATE'},
  {label: 'Báo tin đăng sai', value: 'WRONG_INFO'},
];
