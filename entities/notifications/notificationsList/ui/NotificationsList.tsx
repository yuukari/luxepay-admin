import { FC } from 'react';
import { useAppSelector } from '../../../../shared/hooks';

import Notification from '../../notification/ui';

const NotificationsList: FC = () => {
    const notifications = useAppSelector(state => state.notifications.notifications);
    
    return <div 
        className="z-5"
    >
        {notifications.map((notification, i) => <Notification key={i} {...notification}/>)}
    </div>;
};

export default NotificationsList;