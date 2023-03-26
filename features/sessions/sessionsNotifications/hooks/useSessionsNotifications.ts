import { useSessionsObserver } from "../../../../shared/api/sessions/hooks";

import { useAppDispatch } from "../../../../shared/hooks"
import { addNotification } from "../../../../entities/notifications/notificationsList/model";

export const useSessionsNotifications = () => {
    const dispatch = useAppDispatch();

    const onSessionTerminateSuccess = () => {
        dispatch(addNotification({
            message: 'Сессия завершена',
            type: 'success'
        }))
    }

    const onSessionTerminateError = () => {
        dispatch(addNotification({
            message: 'Не удалось завершить сессию',
            type: 'error'
        }))
    }

    useSessionsObserver(onSessionTerminateSuccess, onSessionTerminateError);
}

export default useSessionsNotifications;