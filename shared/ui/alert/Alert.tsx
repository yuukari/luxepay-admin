import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { useAlertClass, useAlertIcon } from './hooks';

import { AlertType } from './types';

type AlertProps = {
    className?: string,
    offset?: number,

    message: ReactNode,
    title?: string,

    type?: AlertType,
    
    actions?: ReactNode
}

const Alert: FC<AlertProps> = (props) => {
    const { className, offset, message, title, type, actions } = props;

    const alertType = type ? type : 'default';
    const alertClass = useAlertClass(alertType);
    const alertIcon = useAlertIcon(alertType);

    return <div 
        className={cn([
            "alert",
            alertClass,
            "shadow-lg",

            className
        ])}
        style={offset != undefined ? {top: `${offset}px`} : {}}
    >
        <div>
            {alertIcon}
        
            {title ?
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <div className="text-sm">{message}</div>
                </div>
            :
                <span>{message}</span>        
            }
        </div>
        
        {actions && <div className="flex-none">
            {actions}
        </div>}
    </div>
};

export default Alert;