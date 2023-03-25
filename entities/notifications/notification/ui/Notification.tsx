import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import Alert from '../../../../shared/ui/alert';
import Button from '../../../../shared/ui/button';

import { useAppDispatch } from '../../../../shared/hooks';

import { NotificationInstance } from '../../types';
import { destroyNotification } from '../../notificationsList/model';

const Notification: FC<NotificationInstance> = (props) => {
    const { id, message, title, type, autoClose } = props;    
    
    const [open, setOpen] = useState(true);
    const [closing, setClosing] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (closing)
            setTimeout(() => setOpen(false), 300);
    }, [closing]);

    useEffect(() => {
        if (!open)
            dispatch(destroyNotification(id));
    }, [open]);

    useEffect(() => {
        if (open && !closing && (autoClose == undefined || autoClose == true))
            setTimeout(() => setClosing(true), 5000);
    }, []);

    const handleCloseClick = () => {
        setClosing(true);
    }

    return <Alert
        className={cn(
            "min-w-[260px] w-fit h-fit fixed top-4 left-[50%] translate-x-[-50%]",
            {"animate-fade-in": !closing},
            {"animate-fade-out": closing}
        )}

        message={message}
        title={title}
        type={type}

        actions={
            <Button
                className="btn-xs"
                text="Ок"

                onClick={handleCloseClick}
            />
        }
    />
};

export default Notification;