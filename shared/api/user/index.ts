import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User, AuthBody, AuthResponse } from './types';

import { apiUrl } from '../../config';

export const userAPI = createApi({
    reducerPath: 'user',

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        auth: builder.query<User, void>({
            query: () => '/login',

            transformResponse: (response: AuthResponse): User => {
                if (response.status == 'ok')
                    return {
                        isLoggedIn: true
                    }
                else
                    return {
                        isLoggedIn: false,
                        error: response.message
                    }
            }
        }),
        login: builder.mutation<User, AuthBody>({
            query: (body) => ({
                url: `/login`,
                method: 'POST',
                body
            }),

            transformResponse: (response: AuthResponse): User => {
                if (response.status == 'ok')
                    return {
                        isLoggedIn: true,
                        ipInfo: response.ipInfo
                    }
                else
                    return {
                        isLoggedIn: false,
                        error: response.message
                    }
            },

            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                try {
                    const queryResponse = await queryFulfilled;

                    if (queryResponse.data.error == undefined)
                        dispatch(userAPI.util.updateQueryData('auth', undefined, (draft) => {
                            draft.isLoggedIn = queryResponse.data.isLoggedIn;
                            draft.ipInfo = queryResponse.data.ipInfo;
                        }))
                } catch {}
            },
        }),
        logout: builder.mutation<User, void>({
            query: () => '/logout',

            transformResponse: (response: AuthResponse): User => {
                if (response.status == 'ok')
                    return {
                        isLoggedIn: false
                    }
                else
                    return {
                        isLoggedIn: true,
                        error: response.message
                    }
            }
        })
    })
})

export const {
    useAuthQuery,
    useLoginMutation,
    useLogoutMutation
} = userAPI;