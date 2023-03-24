import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { OrdersData, ListOrdersBody, ListOrdersResponse, ApproveOrderBody, Order, ApproveOrderResponse } from './types';

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
        approveOrder: builder.mutation<Order, ApproveOrderBody>({
            invalidatesTags: ['orders'],

            query: (body) => ({
                url: `/approve-order`,
                method: 'POST',
                body
            }),

            transformResponse: (response: ApproveOrderResponse): Order => {
                return response.order;
            },

            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    ordersAPI.util.invalidateTags(['orders']);

                    // const patchResult = dispatch(
                    //     ordersAPI.util.updateQueryData('listOrders', {}, (draft) => {
                    //         if (draft.orders){
                                
                    //         }
                    //         // Object.assign(draft, updatedOrder)
                    //     })
                    // )
                } catch {}
            },
        }),
    })
})

export const {
    useListOrdersQuery,
    useApproveOrderMutation
} = ordersAPI;