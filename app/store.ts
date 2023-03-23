import { configureStore } from '@reduxjs/toolkit'

import preloader from '../shared/model/preloader';

import { userAPI } from '../shared/api/user';
import { ordersAPI } from '../shared/api/orders';

export const store = configureStore({
	reducer: {
		preloader,

		[userAPI.reducerPath]: userAPI.reducer,
		[ordersAPI.reducerPath]: ordersAPI.reducer,
	},

	middleware: (getDefaultMiddleware) =>
    	getDefaultMiddleware().concat(
			userAPI.middleware,
			ordersAPI.middleware
		)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch