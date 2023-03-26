import { FC } from 'react';

import SessionsTableRow from '../../sessionsTableRow/ui';
import TableSkeletonRow from '../../../../shared/ui/tableSkeletonRow';

import { Session } from '../../../../shared/api/sessions/types';

type SessionsTableProps = {
    sessions?: Session[],
    isFetching: boolean
}

const SessionsTable: FC<SessionsTableProps> = (props) => {
    const { sessions, isFetching } = props;

    return <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th style={{ position: 'inherit' }}>IP адрес</th>
                    <th>User-Agent</th>
                    <th>Время последней активности</th>
                    <th>Действия</th>
                </tr>
            </thead>

            {(!isFetching && sessions != undefined) && <tbody>
                {sessions.map((session, i) => {
                    return <SessionsTableRow key={i} {...session}/>
                })}
            </tbody>}

            {isFetching && <tbody>
                <TableSkeletonRow columns={4}/>
                <TableSkeletonRow columns={4}/>
                <TableSkeletonRow columns={4}/>
                <TableSkeletonRow columns={4}/>
                <TableSkeletonRow columns={4}/>
            </tbody>}
        </table>
    </div>
};

export default SessionsTable;