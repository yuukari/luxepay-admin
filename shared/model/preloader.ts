import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PreloaderState {
    loading: boolean
}

const initialState: PreloaderState = {
    loading: true
}

export const preloaderSlice = createSlice({
    name: 'preloader',

    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
})

export const { setLoading } = preloaderSlice.actions;
export default preloaderSlice.reducer;