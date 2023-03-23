import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User, AuthBody, AuthResponse } from './types';

export const userAPI = createApi({
    reducerPath: 'user',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.dev-luxepay.com/admin',
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
                        isLoggedIn: true
                    }
                else
                    return {
                        isLoggedIn: false,
                        error: response.message
                    }
            }
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