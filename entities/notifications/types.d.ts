import { AlertType } from "../../shared/ui/alert/types"

export interface NotificationProps {
    message: string,
    title?: string,
    type?: AlertType,

    autoClose?: boolean
}

export interface NotificationInstance extends NotificationProps {
    id: number,
}