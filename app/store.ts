import { configureStore } from '@reduxjs/toolkit'

import preloader from '../shared/model/preloader';

import { userAPI } from '../shared/api/user';

export const store = configureStore({
	reducer: {
		preloader,
		[userAPI.reducerPath]: userAPI.reducer
	},

	middleware: (getDefaultMiddleware) =>
    	getDefaultMiddleware().concat(
			userAPI.middleware
		)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch