import { addDeletableSchema, addAuditableSchema, FindResult, execCursorPaging, NotImplementedError, getElasticInstance, decodeBase64, encodeBase64, changeToSlug } from '@app/core';
import { News, FindNewsQuery, FindNewsESResult, FindFollowsQuery, SearchQuery, NewsRepository, MostFollowQuery, FindNewsDetail } from '@app/machine-news';
import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';
import { UpdateFollower } from '@app/auth';
import { GetNewsByOwnerIdQuery } from './interfaces/GetNewsByOwnerIdQuery';
import slugify from 'slugify';
import { FindRelatedNewsQuery } from './interfaces/FindRelatedNewsQuery';
import { SearchNewsOffsetPagingQuery } from '../search-offset/interfaces/SearchNewsOffsetPagingQuery';
import { FindSameOwnerNewsQuery } from './interfaces/FindSameOwnerNews';

const NewsSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  title: {
    type: String,
    es_type: 'text',
  },
  elasticsearchTitle: {
    type: String,
    es_type: 'keyword',
  },
  elasticsearchKeywords: {
    type: String,
    es_type: 'text',
  },
  elasticsearchSuggestions: {
    type: String,
    es_type: 'text',
  },
  elasticsearchPrice: {
    type: Number,
    es_type: 'keyword',
  },
  elasticsearchCreatedAt: {
    type: Number,
    es_type: 'keyword',
  },
  state: {
    type: String,
    es_type: 'text',
  },
  description: {
    type: String,
    es_type: 'text',
  },
  imageUrls: [{
    type: String,
    es_type: 'text',
  }],
  price: {
    type: Number,
    es_type: 'float',
    default: 0,
  },
  priceType: {
    type: String,
    es_type: 'text',
  },
  newsType: {
    type: String,
    es_type: 'text',
  },
  owner: {
    type: String,
    ref: 'User',
    es_type: 'nested',
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    es_type: 'nested',
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Province',
    es_type: 'nested',
  },
  status: {
    type: String,
    es_type: 'text',
  },
  usedHours: {
    type: Number,
    es_type: 'integer',
    default: 0,
  },
  serialNo: {
    type: String,
    es_type: 'text',
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    es_type: 'nested',
  },
  type: {
    type: String,
    es_type: 'text',
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    es_type: 'nested',
  },
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Model',
    es_type: 'nested',
  },
  weight: {
    type: Number,
    es_type: 'integer',
    default: 0,
  },
  weightRange: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WeightRange',
    es_type: 'nested',
  },
  year: {
    type: Number,
    es_type: 'integer',
    default: 0,
  },
  rentalPeriod: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RentalPeriod',
    es_type: 'nested',
  },
  reviewedAt: {
    type: Date,
    es_type: 'date',
  },
  reviewedBy: {
    type: String,
    es_type: 'text',
  },
  followBy: [{
    type: String,
    ref: 'User',
    es_type: 'text',
  }],
  elasticsearchID: {
    type: String,
    es_type: 'keyword',
  },
  counterView: {
    type: Number,
    default: 0,
  },
  counterFollow: {
    type: Number,
    default: 0,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
})));
NewsSchema.index({ brand: 1 });
NewsSchema.index({ categoryId: 1 });
NewsSchema.index({ model: 1 });
NewsSchema.index({ brand: 1, categoryId: 1, model: 1 });
NewsSchema.index({ title: `text` });
interface INewsModel extends mongoose.Model<any> {
  synchronize(criteria?: any): any;
  search(query: any, options: any, callback: any): any;
  esSearch(query: any, options: any, callback: any): any;
  createMapping(options: any, callback?: any): any;
}

// Connect mongoose plugin Mongoosastic with ElasticSearch
NewsSchema.plugin(mongoosastic, {
  esClient: getElasticInstance(),
  populate: [
    {
      path: 'owner',
      model: 'User',
    },
    {
      path: 'categoryId',
      model: 'Category',
    },
    {
      path: 'brand',
      model: 'Brand',
    },
    {
      path: 'location',
      model: 'Province',
    },
    {
      path: 'model',
      model: 'Model',
    },
    {
      path: 'shop',
      model: 'Shop',
    },
    {
      path: 'weightRange',
      model: 'WeightRange',
    },
    {
      path: 'rentalPeriod',
      model: 'RentalPeriod',
    },
  ],
  transform(data: any, _news: any) {
    return {
      ...data,
      elasticsearchID: _news._id,
      elasticsearchTitle: _news.title,
      elasticsearchPrice: _news.price,
      elasticsearchCreatedAt: _news.createdAt,
      elasticsearchKeywords:
        changeToSlug(_news.title ? _news.title : '')
        + changeToSlug(_news.categoryId && _news.categoryId.name ? _news.categoryId.name : '')
        + changeToSlug(_news.location && _news.location.name ? _news.location.name : '')
        + changeToSlug(_news.model && _news.model.name ? _news.model.name : ''),
      elasticsearchSuggestions: changeToSlug(_news.brand && _news.brand.name ? _news.brand.name : '')
      + changeToSlug(_news.model && _news.model.name ? _news.model.name : ''),
    };
  },
});
export const NewsModel = mongoose.model<any, INewsModel>('News', NewsSchema);
NewsModel.createMapping(
  {
    'settings': {
      'number_of_shards': 1,
      'max_ngram_diff': 2,
      'analysis': {
        'filter': {
          'nGram_filter': {
            'type': 'ngram',
            'min_gram': 3,
            'max_gram': 5,
            'token_chars': [
              'letter',
              'digit',
              'punctuation',
              'whitespace',
              'symbol',
            ],
          },
        },
        'analyzer': {
          'default': {
            'tokenizer': 'my_tokenizer',
            'filter': [
              'lowercase',
              'asciifolding',
              'nGram_filter',
            ],
          },
        },
        'tokenizer': {
          'my_tokenizer': {
            'type': 'ngram',
            'min_gram': 3,
            'max_gram': 5,
            'token_chars': [
              'letter',
              'digit',
              // 'whitespace',
              'symbol',
            ],
          },
        },
      },
    },
  },
  (err: any, mapping: any) => {
    if (err) {
      // tslint:disable-next-line:no-console
      console.log('error creating mapping', err);
    } else {
      // tslint:disable-next-line:no-console
      console.log('Mapping Created', mapping);
      // Synchronize records from mongodb to elasticsearch index
      // tslint:disable-next-line
      var stream = NewsModel.synchronize();
      // tslint:disable-next-line:no-var-keyword
      var countIndex = 0;
      stream.on('data', () => {
        countIndex++;
      });
      stream.on('close', () => {
        // tslint:disable-next-line:no-console
        console.log('Indexed ' + countIndex + ' Documents');
      });
      stream.on('error', (error: any) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
    }
  },
);

const searchNews = (
  query: SearchQuery,
): Promise<FindNewsESResult> => {
  try {
    return new Promise((resolve, reject) => {
      const conditions: any[] = [];
      const shouldConditions: any[] = [];
      const sortCondition: any[] = [];
      const mustNotConditions: any[] = [];
      const searchAfterCondition: any[] = [];
      const sortField = query.sortBy.split('|')[0];
      const sortOrder = query.sortBy.split('|')[1];
      const invertSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      // must not conditions
      if (query.sortBy && sortField === 'year') {
        mustNotConditions.push(
          {
            range: {
              'year': { lte: 0 },
            },
          },
        );
      }
      // search after condition
      if (query.before) {
        const { sortFieldValue, secondSortValue } = decodeBase64(query.before);
        searchAfterCondition.push(
          sortFieldValue,
        );
        searchAfterCondition.push(
          secondSortValue,
        );
      } else if (query.after) {
        const { sortFieldValue, secondSortValue } = decodeBase64(query.after);
        searchAfterCondition.push(
          sortFieldValue,
        );
        searchAfterCondition.push(
          secondSortValue,
        );
      }
      // sort
      if (query.before) {
        sortCondition.push(
          {
            [sortField]: invertSortOrder,
          },
        );
        sortCondition.push(
          {
            elasticsearchID: invertSortOrder,
          },
        );
      } else {
        sortCondition.push(
          {
            [sortField]: sortOrder,
          },
        );
        sortCondition.push(
          {
            elasticsearchID: sortOrder,
          },
        );
      }
      // condition
      conditions.push(
        {match_phrase: { 'status': `PUBLIC` }},
      );
      if (query.keyword) {
        const queryKeyword = slugify(query.keyword).replace(/-/g, ' ');
        conditions.push(
          {
            match: {
              'elasticsearchKeywords':
              {
                query: queryKeyword,
                'minimum_should_match': '100%',
              },
            },
          },
        );
      }
      if (query.location) {
        conditions.push(
          {
            nested: {
              path: 'location',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'location._id': query.location,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.model) {
        conditions.push(
          {
            nested: {
              path: 'model',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'model._id': query.model,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.newsType && !query.otherNewsType) {
        conditions.push(
          {
            match_phrase: { 'newsType': query.newsType },
          },
        );
      }
      if (query.newsType && query.otherNewsType) {
        shouldConditions.push(
          { match_phrase: { 'newsType': query.newsType } },
          { match_phrase: { 'newsType': query.otherNewsType } },
        );
      }
      if (query.status) {
        conditions.push(
          {
            match_phrase: { 'status': query.status },
          },
        );
      }
      if (query.brand) {
        conditions.push(
          {
            nested: {
              path: 'brand',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'brand._id': query.brand,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.categoryId) {
        conditions.push(
          {
            nested: {
              path: 'categoryId',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'categoryId._id': query.categoryId,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.weightRange) {
        conditions.push(
          {
            nested: {
              path: 'weightRange',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'weightRange._id': query.weightRange,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.owner) {
        conditions.push(
          {
            nested: {
              path: 'owner',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'owner._id': query.owner,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.priceType) {
        conditions.push(
          {
            match_phrase: { 'priceType': query.priceType },
          },
        );
      }
      if (query.shop) {
        conditions.push(
          {
            nested: {
              path: 'shop',
              query: {
                bool: {
                  must: [
                    {
                      match_phrase: {
                        'shop._id': query.shop,
                      },
                    },
                  ],
                },
              },
            },
          },
        );
      }
      if (query.state) {
        conditions.push(
          {
            match_phrase: { 'state': query.state },
          },
        );
      }
      if (query.type) {
        conditions.push(
          {
            match_phrase: { 'type': query.type },
          },
        );
      }
      if (query.minPrice && query.maxPrice) {
        conditions.push(
          {
            range: {
              'price': {
                gte: query.minPrice,
                lt: query.maxPrice,
              },
            },
          },
        );
      }
      const bool: any = {
        must: conditions,
        should: shouldConditions,
        must_not: mustNotConditions,
      };
      if (query.newsType && query.otherNewsType) {
        bool['minimum_should_match'] = 1;
      }
      const search: any = {
        from: 0,
        size: Number(Number(query.first)) + 1,
        query: {
          bool,
        },
        sort: sortCondition,
      };
      if (searchAfterCondition.length > 0) {
        search.search_after = searchAfterCondition;
      }
      NewsModel.esSearch(
        search,
        {
          hydrate: false,
        },
        (err: any, results: any) => {
          if (err) {
            reject(err.message || 'Internal server error.');
          }
          const data = results.hits.hits.map((item: any) => {
            return {
              ...item._source,
              _id: item._id,
            };
          });
          if (query.before) {
            resolve(
              {
                data: data.length === Number(query.first) + 1 ? data.slice(0, Number(query.first)).reverse() : [...data].reverse(),
                before: data.length === Number(query.first) + 1 ? encodeBase64({
                  sortFieldValue: data[Number(query.first) - 1][sortField],
                  secondSortValue: data[Number(query.first) - 1]._id,
                }) : undefined,
                after: encodeBase64({
                  sortFieldValue: data[0][sortField],
                  secondSortValue: data[0]._id,
                }),
              } as any,
            );
          }
          else {
            resolve(
              {
                data: data.length === Number(query.first) + 1 ? data.slice(0, Number(query.first)) : data,
                before: query.after ? encodeBase64({ sortFieldValue: data[0][sortField], secondSortValue: data[0]._id }) : undefined,
                after: data.length === Number(query.first) + 1
                  ? encodeBase64({
                    sortFieldValue: data[Number(query.first) - 1][sortField], secondSortValue
                      : data[Number(query.first) - 1]._id,
                  }) : undefined,
              } as any,
            );
          }
        },
      );
    });
  } catch (err) {
    throw new Error(err.message || 'Internal server error.');
  }
};

const searchNewsOffsetPaging = async (query: SearchNewsOffsetPagingQuery) => {
  return new Promise((resolve, reject) => {
    const conditions: any[] = [];
    const shouldConditions: any[] = [];
    const sortCondition: any[] = [];
    const mustNotConditions: any[] = [];
    const sortField = query.sortBy.split('|')[0];
    const sortOrder = query.sortBy.split('|')[1];

    if (query.sortBy && sortField === 'year') {
      mustNotConditions.push(
        {
          range: {
            'year': { lte: 0 },
          },
        },
      );
    }

    // sort order
    sortCondition.push({[sortField]: sortOrder});
    sortCondition.push({elasticsearchID: sortOrder});

    // filter condition
    conditions.push(
      {match_phrase: { 'status': `PUBLIC` }},
    );
    if (query.keyword) {
      const queryKeyword = slugify(query.keyword).replace(/-/g, ' ');
      conditions.push(
        {
          match: {
            'elasticsearchKeywords':
            {
              query: queryKeyword,
              'minimum_should_match': '100%',
            },
          },
        },
      );
    }
    if (query.location) {
      conditions.push(
        {
          nested: {
            path: 'location',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'location._id': query.location,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.model) {
      conditions.push(
        {
          nested: {
            path: 'model',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'model._id': query.model,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.newsType && !query.otherNewsType) {
      conditions.push(
        {
          match_phrase: { 'newsType': query.newsType },
        },
      );
    }
    if (query.newsType && query.otherNewsType) {
      shouldConditions.push(
        { match_phrase: { 'newsType': query.newsType } },
        { match_phrase: { 'newsType': query.otherNewsType } },
      );
    }
    if (query.status) {
      conditions.push(
        {
          match_phrase: { 'status': query.status },
        },
      );
    }
    if (query.brand) {
      conditions.push(
        {
          nested: {
            path: 'brand',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'brand._id': query.brand,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.categoryId) {
      conditions.push(
        {
          nested: {
            path: 'categoryId',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'categoryId._id': query.categoryId,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.weightRange) {
      conditions.push(
        {
          nested: {
            path: 'weightRange',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'weightRange._id': query.weightRange,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.owner) {
      conditions.push(
        {
          nested: {
            path: 'owner',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'owner._id': query.owner,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.priceType) {
      conditions.push(
        {
          match_phrase: { 'priceType': query.priceType },
        },
      );
    }
    if (query.shop) {
      conditions.push(
        {
          nested: {
            path: 'shop',
            query: {
              bool: {
                must: [
                  {
                    match_phrase: {
                      'shop._id': query.shop,
                    },
                  },
                ],
              },
            },
          },
        },
      );
    }
    if (query.state) {
      conditions.push(
        {
          match_phrase: { 'state': query.state },
        },
      );
    }
    if (query.type) {
      conditions.push(
        {
          match_phrase: { 'type': query.type },
        },
      );
    }
    if (query.minPrice && query.maxPrice) {
      conditions.push(
        {
          range: {
            'price': {
              gte: query.minPrice,
              lt: query.maxPrice,
            },
          },
        },
      );
    }

    // search options
    const search: any = {
      from: (Number(query.pageNumber) - 1) * Number(query.pageSize),
      size: Number(query.pageSize),
      query: {
        bool: {
          must: conditions,
          should: shouldConditions,
          must_not: mustNotConditions,
        },
      },
      sort: sortCondition,
    };

    // perform search
    NewsModel.esSearch(
      search,
      {hydrate: false},
      (err: any, results: any) => {
        if (err) {
          reject(err.message || 'Internal server error.');
        }
        const data = results.hits.hits.map((item: any) => {
          return {
            ...item._source,
            _id: item._id,
          };
        });

        resolve({
          data,
          total: results.hits.total,
        });
      },
    );
  }) as any;
};

const searchSuggestions = async (keyword: string) => {
  return new Promise((resolve, reject) => {
    const conditions: any[] = [];
    const shouldConditions: any[] = [];
    const sortCondition: any[] = [];
    const mustNotConditions: any[] = [];
    const sortField = 'elasticsearchTitle';
    const sortOrder = 'asc';

    // sort order
    sortCondition.push({[sortField]: sortOrder});
    sortCondition.push({elasticsearchID: sortOrder});

    // filter condition
    const queryKeyword = slugify(keyword).replace(/-/g, ' ');
    conditions.push(
      {
        match: {
          'elasticsearchSuggestions':
          {
            query: queryKeyword,
            'minimum_should_match': '100%',
          },
        },
      },
    );

    // search options
    const search: any = {
      from: 0,
      size: 4,
      query: {
        bool: {
          must: conditions,
          should: shouldConditions,
          must_not: mustNotConditions,
        },
      },
      sort: sortCondition,
    };

    // perform search
    NewsModel.esSearch(
      search,
      {hydrate: false},
      (err: any, results: any) => {
        if (err) {
          reject(err.message || 'Internal server error.');
        }
        const suggestions = results.hits.hits.map((item: any) => item._source.elasticsearchTitle);

        resolve({
          suggestions,
        });
      },
    );
  }) as any;
};

const find = async (query: FindNewsQuery): Promise<FindResult<News>> => {
  const filters: any[] = [];

  if (query.before) {
    const data = await NewsModel.find(filters.length > 0 ? { $and: filters } : {})
      .sort({ [query.sortBy]: 1 })
      .where({ _id: { $gt: query.before } })
      .limit(Number(query.first) + 1)
      .exec() as any;

    return {
      data: data.length > Number(query.first) ? data.slice(0, Number(query.first) - 1).reverse() : [...data].reverse(),
      before: data.length > Number(query.first) ? data[Number(query.first) - 1]._id : undefined,
      after: data[0]._id,
    };
  } else {
    const data = await NewsModel.find(filters.length > 0 ? { $and: filters } : {})
      .sort({ [query.sortBy]: -1 })
      .where({ _id: { $lt: query.before } })
      .limit(Number(Number(query.first)) + 1)
      .exec() as any;

    return {
      data: data.length > Number(query.first) ? data.slice(0, Number(query.first)) : data,
      before: query.after ? data[0]._id : undefined,
      after: data.length > Number(query.first) ? data[Number(query.first) - 1]._id : undefined,
    };
  }
};

const increaseView = async (id: string): Promise<void> => {
  await NewsModel.findByIdAndUpdate(id, { $inc: { counterView: 1 } }).exec();
};

const findById = async (id: string): Promise<News> => {
  const result = await NewsModel.findById(id)
    .populate('brand')
    .populate('categoryId')
    .populate('location')
    .populate('model')
    .populate('owner')
    .populate('shop')
    .populate('weightRange')
    .populate('rentalPeriod')
    .exec();
  return result;
};

const create = async (payload: Partial<News>): Promise<string> => {
  const newNews = new NewsModel(payload);
  const data = await newNews.save();
  return data._id;
};

const update = async (payload: any): Promise<void> => {
  await NewsModel.findOneAndUpdate({ _id: payload._id }, { $set: payload }, { new: true }).exec();
};

const checkFollow = async (newsId: string, userId: string): Promise<any> => {
  const data = await NewsModel.findOne({ $and: [{ _id: newsId }, { followBy: userId }] }).exec();
  return data;
};

const follow = async (payload: UpdateFollower): Promise<void> => {
  await NewsModel.findOneAndUpdate({ _id: payload.id }, { $push: { followBy: payload.followerId }, $inc: { counterFollow: 1 } }, { new: true }).exec();
};

const unfollow = async (payload: UpdateFollower): Promise<void> => {
  await NewsModel.findOneAndUpdate({ _id: payload.id }, { $pull: { followBy: payload.followerId }, $inc: { counterFollow: -1 } }, { new: true }).exec();
};

const findFollowByNews = async (query: FindFollowsQuery): Promise<FindResult<News>> => {
  const filters: any[] = [{ followBy: query.id, newsType: query.newsType }];
  return await execCursorPaging(NewsModel, filters, query.sortBy, Number(query.first), ['brand', 'categoryId', 'location', 'model', 'owner', 'shop'], query.before, query.after);
};

const searchNewsHaveMostFollower = async (query: MostFollowQuery): Promise<any> => {
  const filters: any = [
    {status: 'PUBLIC'},
  ];
  if (query.shopId) {
    filters.push({shop: query.shopId});
  }
  return await execCursorPaging(NewsModel, filters, 'counterFollow', Number(query.first), ['categoryId', 'brand', 'model', 'location', 'shop', 'owner'], query.before, query.after);
};

const getNewsByOwnerId = async (query: GetNewsByOwnerIdQuery): Promise<FindResult<FindNewsDetail>> => {
  const filters: any[] = [{ status: query.status, owner: query.ownerId }];
  const result = await execCursorPaging(NewsModel, filters, query.sortBy, Number(query.first), ['brand', 'categoryId', 'location', 'model', 'owner', 'shop'], query.before, query.after);

  if (!query.authUser) {
    return {
      ...result,
      data: result.data.map((value: any) => {
        return {
          ...value._doc,
          followBy: [],
          isFollowing: false,
        };
      }),
    };
  }
  else {
    return {
      ...result,
      data: result.data.map((value: any) => {
        if (value.followBy.indexOf(query.authUser.id) !== -1) {
          return {
            ...value._doc,
            followBy: [],
            isFollowing: true,
          };
        } else {
          return {
            ...value._doc,
            followBy: [],
            isFollowing: false,
          };
        }
      }),
    };
  }
};

const del = async (_id: string): Promise<void> => {
  throw new NotImplementedError();
};

const ensureIndexes = async () => {
  await NewsModel.createIndexes();
};

const findOne = async (_query: any): Promise<News> => {
  throw new NotImplementedError();
};

const count = async (): Promise<number> => {
  throw new NotImplementedError();
};

const increaseFollowCount = async (id: string) => {
  await NewsModel.findByIdAndUpdate(id, {$inc: {counterFollow: 1}}).exec();
};

const decreaseFollowCount = async (id: string) => {
  await NewsModel.findByIdAndUpdate(id, {$inc: {counterFollow: -1}}).exec();
};

const getStatisticsInfo = async (startDate: string, endDate: string) => {
  const [daysOfWeek, hoursOfDay, brands, categories, provinces]: any = await Promise.all([
    NewsModel.aggregate([
      {$match: {createdDate: {$gte: new Date(startDate), $lte: new Date(endDate)}}},
      {$project: {dayOfWeek: {$dayOfWeek: {date: '$createdDate', timezone: '+07:00'}}}},
      {$group: {_id: '$dayOfWeek', totalNews: {$sum: 1}}},
    ]),
    NewsModel.aggregate([
      {$match: {createdDate: {$gte: new Date(startDate), $lte: new Date(endDate)}}},
      {$project: {hourOfDay: {$hour: {date: '$createdDate', timezone: '+07:00'}}}},
      {$group: {_id: '$hourOfDay', totalNews: {$sum: 1}}},
    ]),
    NewsModel.aggregate([
      {$match: {createdDate: {$gte: new Date(startDate), $lte: new Date(endDate)}}},
      {$group: {_id: '$brand', totalNews: {$sum: 1}}},
      {$lookup: {from: 'brands', localField: '_id', foreignField: '_id', as: 'brand'}},
      {$unwind: '$brand'},
      {$project: {_id: 1, totalNews: 1, slug: '$brand.slug', name: '$brand.name', logoImage: '$brand.logoImage', createdAt: '$brand.createdAt'}},
    ]),
    NewsModel.aggregate([
      {$match: {createdDate: {$gte: new Date(startDate), $lte: new Date(endDate)}}},
      {$group: {_id: '$categoryId', totalNews: {$sum: 1}}},
      {$lookup: {from: 'categories', localField: '_id', foreignField: '_id', as: 'category'}},
      {$unwind: '$category'},
      {$project: {_id: 1, totalNews: 1, slug: '$category.slug', name: '$category.name', imageUrl: '$category.imageUrl', createdAt: '$category.createdAt'}},
    ]),
    NewsModel.aggregate([
      {$match: {createdDate: {$gte: new Date(startDate), $lte: new Date(endDate)}}},
      {$group: {_id: '$location', totalNews: {$sum: 1}}},
      {$lookup: {from: 'provinces', localField: '_id', foreignField: '_id', as: 'location'}},
      {$unwind: '$location'},
      {$project: {_id: 1, totalNews: 1, slug: '$location.slug', name: '$location.name', createdAt: '$location.createdAt'}},
    ]),
  ] as any);

  return {
    daysOfWeek,
    hoursOfDay,
    brands,
    categories,
    provinces,
  };
};

const getRelatedNews = async (query: FindRelatedNewsQuery) => {
  const numberOfItems = 24;
  let data: News[] = [];

  if (query.category && query.brand && query.model) {
    const categoryBrandModelResult = await NewsModel.find({$and: [
      {status: 'PUBLIC'},
      {categoryId: query.category},
      {brand: query.brand},
      {model: query.model},
      {_id: {$nin: [query.newsId]}},
    ]}).limit(numberOfItems).populate([`categoryId`, `brand`, `model`, `owner`, `shop`]).exec();

    data = data.concat(categoryBrandModelResult);
  }

  if (query.category && query.weightRange && data.length < numberOfItems) {
    const excludedId = data.map((item) => item._id);
    const categoryWeightRangeResult = await NewsModel.find({$and: [
      {status: 'PUBLIC'},
      {categoryId: query.category},
      {weightRange: query.weightRange},
      {_id: {$nin: [...excludedId, query.newsId]}},
    ]}).limit(numberOfItems - data.length).populate([`categoryId`, `brand`, `model`, `owner`, `shop`]).exec();

    data = data.concat(categoryWeightRangeResult);
  }

  if (query.category && query.owner && data.length < numberOfItems) {
    const excludedId = data.map((item) => item._id);
    const categoryOwnerResult = await NewsModel.find({$and: [
      {status: 'PUBLIC'},
      {categoryId: query.category},
      {owner: query.owner},
      {_id: {$nin: [...excludedId, query.newsId]}},
    ]}).limit(numberOfItems - data.length).populate([`categoryId`, `brand`, `model`, `owner`, `shop`]).exec();

    data = data.concat(categoryOwnerResult);
  }

  if (query.category && query.shop && data.length < numberOfItems) {
    const excludedId = data.map((item) => item._id);
    const categoryShopResult = await NewsModel.find({$and: [
      {status: 'PUBLIC'},
      {categoryId: query.category},
      {shop: query.shop},
      {_id: {$nin: [...excludedId, query.newsId]}},
    ]}).limit(numberOfItems - data.length).populate([`categoryId`, `brand`, `model`, `owner`, `shop`]).exec();

    data = data.concat(categoryShopResult);
  }

  if (query.category && query.location && data.length < numberOfItems) {
    const excludedId = data.map((item) => item._id);
    const categoryLocationResult = await NewsModel.find({$and: [
      {status: 'PUBLIC'},
      {categoryId: query.category},
      {location: query.location},
      {_id: {$nin: [...excludedId, query.newsId]}},
    ]}).limit(numberOfItems - data.length).populate([`categoryId`, `brand`, `model`, `owner`, `shop`]).exec();

    data = data.concat(categoryLocationResult);
  }

  return {
    data,
    before: undefined,
    after: undefined,
  };
};

const getSameOwnerNews = async (query: FindSameOwnerNewsQuery) => {
  const filters: any[] = [
    {_id: {$ne: query.newsId}},
    {owner: query.ownerId},
  ];

  return await execCursorPaging(NewsModel, filters, query.sortBy, Number(query.first), ['model', `brand`, `categoryId`, `location`, `shop`, `owner`], query.before, query.after);
};

const findPendingNew = async (query: SearchQuery) => {
  const filters: any[] = [
    {status: 'PENDING'},
  ];
  if (query.keyword) {
    filters.push({ $text: { $search: `"${query.keyword}"` } });
  }

  return await execCursorPaging(NewsModel, filters, query.sortBy, Number(query.first), ['model', `brand`, `categoryId`, `location`, `shop`, `owner`], query.before, query.after);
};

export const newsRepository: NewsRepository = {
  searchSuggestions,
  getSameOwnerNews,
  searchNewsOffsetPaging,
  getRelatedNews,
  getStatisticsInfo,
  find,
  findById,
  create,
  update,
  follow,
  unfollow,
  searchNews,
  findFollowByNews,
  del,
  ensureIndexes,
  findOne,
  count,
  checkFollow,
  searchNewsHaveMostFollower,
  getNewsByOwnerId,
  increaseView,
  increaseFollowCount,
  decreaseFollowCount,
  findPendingNew,
};
