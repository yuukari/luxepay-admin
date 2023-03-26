import { FC } from 'react';

import Button from '../../../../shared/ui/button';

import { Session } from '../../../../shared/api/sessions/types';

const SessionsTableRow: FC<Session> = (session) => {
    const shortUserAgent = session.userAgent.length > 60 ? session.userAgent.slice(0, 60) + '...' : session.userAgent;

    return <tr>
        <td>
            {session.current ? 
                <div className="indicator">
                    <span className="indicator-item indicator-middle badge badge-success badge-xs"/>
                    
                    <a className="block text-gray-200 hover:underline mr-4" href={`https://ipinfo.io/${session.ip}`} target="_blank">{session.ip}</a>
                </div>
            :
                <a className="block text-gray-200 hover:underline" href={`https://ipinfo.io/${session.ip}`} target="_blank">{session.ip}</a>
            }
        </td>

        <td>{shortUserAgent}</td>
        <td>{session.datetime}</td>

        <td>
            <Button
                className='btn-sm'
                text='Завершить'
                disabled={session.current}
            />
        </td>
    </tr>
};

export default SessionsTableRow;