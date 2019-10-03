export const convertVietnamese = (str: string) => {
  let result = str.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/gi, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, 'y');
  result = result.replace(/đ/gi, 'd');
  result = result.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/gi, ' ');
  result = result.replace(/ + /gi, ' ');
  result = result.trim();
  return result;
};
