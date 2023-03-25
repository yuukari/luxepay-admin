import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { OrdersData, ListOrdersBody, ListOrdersResponse, ApproveOrderBody, ApproveOrderResponse, ApproveOrderData } from './types';

export const ordersAPI = createApi({
    reducerPath: 'orders',
    tagTypes: ['orders'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-luxepay.yuukari.online/admin',
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        listOrders: builder.query<OrdersData, ListOrdersBody>({
            providesTags: ['orders'],

            query: (params) => {
                return {
                    url: '/orders',
                    params
                }
            },

            transformResponse: (response: ListOrdersResponse): OrdersData => {                
                if (response.status == 'ok')
                    return {
                        pagination: response.orders!.pagination,
                        orders: response.orders!.data
                    }
                else
                    return {
                        error: response.message
                    }
            }
        }),
        approveOrder: builder.mutation<ApproveOrderData, ApproveOrderBody>({
            query: (body) => ({
                url: `/approve-order`,
                method: 'POST',
                body
            }),

            transformResponse: (response: ApproveOrderResponse): ApproveOrderData => {
                if (response.status == 'ok')
                    return {
                        order: response.order
                    }
                else
                    return {
                        error: response.message
                    }
            },

            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                try {
                    const approveResponse = await queryFulfilled;

                    if (approveResponse.data.error == undefined)
                        dispatch(ordersAPI.util.invalidateTags(['orders']))
                } catch {}
            },
        }),
    })
})

export const {
    useListOrdersQuery,
    useApproveOrderMutation
} = ordersAPI;