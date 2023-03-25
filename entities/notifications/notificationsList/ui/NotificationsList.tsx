import { FC } from 'react';
import { useAppSelector } from '../../../../shared/hooks';

import Notification from '../../notification/ui';

const NotificationsList: FC = () => {
    const notifications = useAppSelector(state => state.notifications.notifications);
    
    return <div 
        className="z-5"
    >
        {notifications.map((notification, i) => <Notification key={i} {...notification}/>)}

        {/* <Notification
            title='Вход с нового IP адреса'
            message="В прошлый раз вы входили в панель с IP: 5.153.29.182. Ваш текущий IP: 92.167.12.56"

            // message={<a>
            //     В прошлый раз вы входили в панель с IP: <a className="underline" href="https://ipinfo.io/5.153.29.182" target="_blank">5.153.29.182</a>. 
            //     Ваш текущий IP: <a className="underline" href="https://ipinfo.io/92.167.12.56" target="_blank">92.167.12.56</a>
            // </>}
            
            type="warning"
        /> */}
    </div>;
};

export default NotificationsList;