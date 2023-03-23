import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User, AuthBody, AuthResponse } from './types';

export const userAPI = createApi({
    reducerPath: 'user',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost/api'
    }),

    endpoints: (builder) => ({
        login: builder.mutation<User, AuthBody>({
            query: (body) => ({
                url: `/auth`,
                method: 'POST',
                body
            }),

            transformResponse: (): User => {
                return {
                    isLoggedIn: true
                }
            },
            transformErrorResponse: (error, meta): User => {
                return {
                    isLoggedIn: false,
                    error: 'Неверное имя пользователя или пароль'
                }
            }
        }),
        logout: builder.mutation<null, void>({
            query: () => '/logout'
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = userAPI;