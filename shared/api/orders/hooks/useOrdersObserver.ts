import { useEffect } from "react";
import { useApproveOrderMutation } from "..";

export const useOrdersObserver = (onOrderApproveSuccess?: () => void, onOrderApproveError?: () => void) => {
    const [, { isLoading, isSuccess, isError, reset } ] = useApproveOrderMutation({
        fixedCacheKey: 'sharedApproveOrder'
    });

    useEffect(() => {
        if (!isLoading && isSuccess && onOrderApproveSuccess != undefined){
            onOrderApproveSuccess();
            reset();
        }
    }, [isLoading, isSuccess]);

    useEffect(() => {
        if (!isLoading && isError && onOrderApproveError != undefined){
            onOrderApproveError();
            reset();
        }
    }, [isLoading, isSuccess]);
}