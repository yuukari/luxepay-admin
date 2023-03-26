import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SessionsData, SessionsResponse, TerminateSessionBody, TerminateSessionData, TerminateSessionResponse } from './types';

import { apiUrl } from '../../config';

export const sessionsAPI = createApi({
    reducerPath: 'sessions',
    tagTypes: ['sessions'],

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        sessions: builder.query<SessionsData, void>({
            providesTags: ['sessions'],

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
        }),
        terminateSession: builder.mutation<TerminateSessionData, TerminateSessionBody>({
            query: (body) => ({
                url: `/terminate-session`,
                method: 'POST',
                body
            }),

            transformResponse: (response: TerminateSessionResponse): TerminateSessionData => {
                if (response.status == 'ok')
                    return {};
                else
                    return {
                        error: response.message
                    }
            },

            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                try {
                    const queryResponse = await queryFulfilled;

                    if (queryResponse.data.error == undefined)
                        dispatch(sessionsAPI.util.invalidateTags(['sessions']))
                } catch {}
            },
        }),
    })
})

export const {
    useSessionsQuery,
    useTerminateSessionMutation
} = sessionsAPI;