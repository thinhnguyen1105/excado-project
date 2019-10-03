import { ProvinceInputError } from '@app/core';
import { provinceRepository, ProvinceService } from '@app/machine-news';
import * as yup from 'yup';

const provinceService: ProvinceService = {
  find: async (_params) => {
    // 1. authorize

    // 2. validate
    // validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    const provinces = await provinceRepository.find();
    const result: any = [];
    const haNoi = provinces.data.filter((item) => item.slug === 'ha-noi')[0];
    if (haNoi) {
      result.push(haNoi);
    }
    const hoChiMinh = provinces.data.filter((item) => item.slug === 'ho-chi-minh')[0];
    if (hoChiMinh) {
      result.push(hoChiMinh);
    }
    const haiPhong = provinces.data.filter((item) => item.slug === 'hai-phong')[0];
    if (haiPhong) {
      result.push(haiPhong);
    }
    const daNang = provinces.data.filter((item) => item.slug === 'da-nang')[0];
    if (daNang) {
      result.push(daNang);
    }
    provinces.data.forEach((item) => {
      if (['ha-noi', 'ho-chi-minh', 'hai-phong', 'da-nang', 'quoc-gia-khac'].indexOf(item.slug) === -1) {
        result.push(item);
      }
    });
    const otherCountry = provinces.data.filter((item) => item.slug === 'quoc-gia-khac')[0];
    if (otherCountry) {
      result.push(otherCountry);
    }

    return {
      before: provinces.before,
      after: provinces.after,
      data: result,
    };
  },
  get: async (id, _params) => {
    // 1. authorize

    // 2. validate
    if (!id) {
      throw new ProvinceInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    return await provinceRepository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.NEWS.CREATE);

    // 2. validate
    const validationSchema = yup.object().shape({
      slug: yup.string().required('Slug is required'),
      name: yup.string().required('Name is required'),
    });
    await validationSchema.validate(data);

    // 3. do business logic

    // 4. persist to db
    const id = await provinceRepository.create({
      ...data,
      ...params.creationInfo,
    });
    return {
      id,
    };
  },
  patch: async (id, data, params): Promise<{}> => {
    provinceService[data.operation](id, data.payload, params);
    return {};
  },
};

export default provinceService;
