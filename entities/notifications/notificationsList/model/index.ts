import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NotificationInstance, NotificationProps } from '../../types';

interface NotificationsState {
    counter: number,
    notifications: NotificationInstance[]
}

const initialState: NotificationsState = {
    counter: 1,
    notifications: []
}

export const notificationsSlice = createSlice({
    name: 'notifications',

    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<NotificationProps>) => {
            const notification = action.payload;

            state.notifications.push({...notification, id: state.counter});
            state.counter++;
        },
        destroyNotification: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.notifications = state.notifications.filter((notification) => notification.id != id);
        }
    },
})

export const { addNotification, destroyNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;