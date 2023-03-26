import { useWindowSize } from "../../../../shared/hooks";

const usePaginationButtonsCount = (): number => {
    const windowSize = useWindowSize();

    if (windowSize.width <= 360)
        return 5;
    else if (windowSize.width <= 565)
        return 7;
    else
        return 9;
}

export default usePaginationButtonsCount;