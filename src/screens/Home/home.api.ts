import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from '../../lib/baseQuery';

export const homeApi = createApi({
  reducerPath: 'home/api',
  baseQuery,
  endpoints: build => ({
    getProducts: build.query({
      query: () => {
        return {
          url: 'products',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetProductsQuery} = homeApi;
