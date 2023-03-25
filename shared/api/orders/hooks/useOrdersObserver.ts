import { useEffect } from "react";
import { useApproveOrderMutation } from "..";

export const useOrdersObserver = (onOrderApproveSuccess?: () => void, onOrderApproveError?: () => void) => {
    const [, { isLoading, isSuccess, isError } ] = useApproveOrderMutation({
        fixedCacheKey: 'sharedApproveOrder'
    });

    console.log('isLoading:', isLoading, 'isSuccess:', isSuccess, 'isError:', isError);

    useEffect(() => {
        if (!isLoading && isSuccess && onOrderApproveSuccess != undefined)
            onOrderApproveSuccess();
    }, [isLoading, isSuccess]);

    useEffect(() => {
        if (!isLoading && isError && onOrderApproveError != undefined)
            onOrderApproveError();
    }, [isLoading, isSuccess]);
}