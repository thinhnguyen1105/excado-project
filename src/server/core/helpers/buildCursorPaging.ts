import { decodeBase64 } from './decodeBase64';
import { encodeBase64 } from './encodeBase64';

export const execCursorPaging = async (model: any, filters: any[], sortBy: string, pageSize: number, populates: string[], before?: string, after?: string) => {
  const sortField = sortBy.split('|')[0];
  const sortOrder = sortBy.split('|')[1] === 'asc' ? 1 : -1;

  if (before) {
    const {sortFieldValue, secondSortValue} = decodeBase64(before);
    filters.push({$or: [
      {[sortField]: sortOrder === 1 ? {$lt: sortFieldValue} : {$gt: sortFieldValue}},
      {$and: [
        {[sortField]: sortFieldValue},
        {_id: sortOrder === 1 ? {$lt: secondSortValue} : {$gt: secondSortValue}},
      ]},
    ]});
  } else if (after) {
    const {sortFieldValue, secondSortValue} = decodeBase64(after);
    filters.push({$or: [
      {[sortField]: sortOrder === 1 ? {$gt: sortFieldValue} : {$lt: sortFieldValue}},
      {$and: [
        {[sortField]: sortFieldValue},
        {_id: sortOrder === 1 ? {$gt: secondSortValue} : {$lt: secondSortValue}},
      ]},
    ]});
  }

  if (before) {
    let query = model.find(filters.length > 0 ? {$and: filters} : {})
      .sort({[sortField]: sortOrder * -1, _id: sortOrder * -1})
      .limit(pageSize + 1);
    for (const item of populates) {
      query = query.populate(item);
    }

    const data = await query.exec();

    return {
      data: data.length === pageSize + 1 ? data.slice(0, pageSize - 1).reverse() : [...data].reverse(),
      before: data.length === pageSize + 1 ? encodeBase64({
        sortFieldValue: data[pageSize - 1][sortField],
        secondSortValue: data[pageSize - 1]._id,
      }) : undefined,
      after: encodeBase64({
        sortFieldValue: data[0][sortField],
        secondSortValue: data[0]._id,
      }),
    };
  } else {
    let query = model.find(filters.length > 0 ? {$and: filters} : {})
      .sort({[sortField]: sortOrder, _id: sortOrder})
      .limit(pageSize + 1);
    for (const item of populates) {
      query = query.populate(item);
    }
    const data = await query.exec();

    return {
      data: data.length === pageSize + 1 ? data.slice(0, pageSize) : data,
      before: after ? encodeBase64({sortFieldValue: data[0][sortField], secondSortValue: data[0]._id}) : undefined,
      after: data.length === pageSize + 1 ? encodeBase64({sortFieldValue: data[pageSize - 1][sortField], secondSortValue: data[pageSize - 1]._id}) : undefined,
    };
  }
};
