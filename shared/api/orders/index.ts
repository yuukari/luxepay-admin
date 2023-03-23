import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { OrdersData, ListOrdersBody, ListOrdersResponse } from './types';

export const ordersAPI = createApi({
    reducerPath: 'orders',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.dev-luxepay.com/admin',
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        listOrders: builder.query<OrdersData, ListOrdersBody>({
            query: (params) => {
                return {
                    url: '/orders',
                    params
                }
            },

            transformResponse: (response: ListOrdersResponse): OrdersData => {
                console.log(response);
                
                if (response.status == 'ok')
                    return {
                        pagination: response.orders!.pagination,
                        orders: response.orders!.data
                    }
                else
                    return {
                        pagination: undefined,
                        orders: undefined,
                        error: response.message
                    }
            }
        })
    })
})

export const {
    useListOrdersQuery,
} = ordersAPI;