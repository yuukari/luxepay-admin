import { useOrdersObserver } from "../../../../shared/api/orders/hooks";

import { useAppDispatch } from "../../../../shared/hooks"
import { addNotification } from "../../../../entities/notifications/notificationsList/model";

export const useOrdersNotifications = () => {
    const dispatch = useAppDispatch();

    const onOrderApproveSuccess = () => {
        dispatch(addNotification({
            message: 'Оплата подтверждена',
            type: 'success'
        }))
    }

    const onOrderApproveError = () => {
        dispatch(addNotification({
            message: 'Не удалось подтвердить оплату заказа',
            type: 'error'
        }))
    }

    useOrdersObserver(onOrderApproveSuccess, onOrderApproveError);
}

export default useOrdersNotifications;