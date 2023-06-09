import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ShopsData, ShopsResponse } from './types';

import { apiUrl } from '../../config';

export const shopsAPI = createApi({
    reducerPath: 'shops',

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        shops: builder.query<ShopsData, void>({
            query: () => '/shops',

            transformResponse: (response: ShopsResponse): ShopsData => {                
                if (response.status == 'ok')
                    return {
                        shops: response.shops
                    }
                else
                    return {
                        error: response.message
                    }
            }
        })
    })
})

export const {
    useShopsQuery,
} = shopsAPI;