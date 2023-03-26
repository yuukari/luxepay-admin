import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import Button from '../../../../shared/ui/button';

import { useTerminateSessionMutation } from '../../../../shared/api/sessions';

type SessionTerminateButtonProps = {
    id: string,
    current: boolean
}

const SessionTerminateButton: FC<SessionTerminateButtonProps> = (props) => {
    const { id, current } = props;

    const [loading, setLoading] = useState(false);

    const [ terminateSession, { isLoading } ] = useTerminateSessionMutation({
        fixedCacheKey: 'sharedTerminateSession'
    });

    useEffect(() => {
        if (!isLoading)
            setLoading(false);
    }, [isLoading]);

    const handleClick = () => {
        setLoading(true);
        terminateSession({ id });
    }

    return <Button
        className={cn([
            "btn-sm",
            {"animate-pulse": loading}
        ])}

        text='Завершить'
        disabled={current || loading}

        onClick={handleClick}
    />
};

export default SessionTerminateButton;