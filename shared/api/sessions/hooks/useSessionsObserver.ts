import { useEffect } from "react";
import { useTerminateSessionMutation } from "..";

export const useSessionsObserver = (onSessionTerminateSuccess?: () => void, onSessionTerminateError?: () => void) => {
    const [, { isLoading, isSuccess, isError, reset } ] = useTerminateSessionMutation({
        fixedCacheKey: 'sharedTerminateSession'
    });

    useEffect(() => {
        if (!isLoading && isSuccess && onSessionTerminateSuccess != undefined){
            onSessionTerminateSuccess();
            reset();
        }
    }, [isLoading, isSuccess]);

    useEffect(() => {
        if (!isLoading && isError && onSessionTerminateError != undefined){
            onSessionTerminateError();
            reset();
        }
    }, [isLoading, isSuccess]);
}