import { configureStore } from '@reduxjs/toolkit'

import preloader from '../shared/model/preloader';

export const store = configureStore({
	reducer: {
		preloader
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch