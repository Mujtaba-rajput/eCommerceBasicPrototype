import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://my-json-server.typicode.com/benirvingplt/products/',
  prepareHeaders: async headers => {
    return headers;
  },
});
