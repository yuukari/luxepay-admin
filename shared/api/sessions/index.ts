import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SessionsData, SessionsResponse } from './types';

export const sessionsAPI = createApi({
    reducerPath: 'sessions',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-luxepay.yuukari.online/admin',
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        sessions: builder.query<SessionsData, void>({
            query: () => '/sessions',

            transformResponse: (response: SessionsResponse): SessionsData => {                
                if (response.status == 'ok')
                    return {
                        sessions: response.sessions
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
    useSessionsQuery,
} = sessionsAPI;