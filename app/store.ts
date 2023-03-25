import { configureStore } from '@reduxjs/toolkit'

import preloader from '../shared/model/preloader';
import notifications from '../entities/notifications/notificationsList/model';

import { userAPI } from '../shared/api/user';
import { ordersAPI } from '../shared/api/orders';
import { shopsAPI } from '../shared/api/shops';

export const store = configureStore({
	reducer: {
		preloader,
		notifications,

		[userAPI.reducerPath]: userAPI.reducer,
		[ordersAPI.reducerPath]: ordersAPI.reducer,
		[shopsAPI.reducerPath]: shopsAPI.reducer,
	},

	middleware: (getDefaultMiddleware) =>
    	getDefaultMiddleware().concat(
			userAPI.middleware,
			ordersAPI.middleware,
			shopsAPI.middleware
		)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch