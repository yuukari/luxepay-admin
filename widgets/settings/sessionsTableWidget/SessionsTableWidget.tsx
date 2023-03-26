import { FC, useEffect } from 'react';
import SessionsTable from '../../../entities/sessions/sessionsTable/ui';

import { useSessionsQuery } from '../../../shared/api/sessions';

const SessionsTableWidget: FC = () => {
    const { data: sessionsData, isFetching, isError, refetch } = useSessionsQuery();

    const sessions = sessionsData ? sessionsData.sessions : undefined;
    const hasError = isError || sessionsData?.error;

    useEffect(() => {
        refetch();
    }, []);

    return <div className="mt-16">
        <h2 className="text-xl font-semibold">Активные сессии</h2>

        <div className="mt-6">
            {!hasError && <SessionsTable
                sessions={sessions}
                isFetching={isFetching}
            />}
        </div>
    </div>
};

export default SessionsTableWidget;