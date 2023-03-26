import { Pagination } from "../../../../shared/api/orders/types";

import { PaginationButtonData } from "../types";

const usePaginationButtonsData = (pagination: Pagination, buttonsCount: number = 7): PaginationButtonData[] => {
    if (buttonsCount < 5)
        throw new Error(`Minimal buttons count is 5 buttons`);
    
    if (buttonsCount % 2 == 0)
        throw new Error(`Buttons count must be an even number`);

    let pages: PaginationButtonData[] = [];
    
    const halfCount = (buttonsCount - 1) / 2;

    for (let i = 1; i <= pagination.pagesCount; i++)
        pages.push({ type: 'page', page: i });

    if (pagination.pagesCount > buttonsCount){
        if (pagination.currentPage <= halfCount)
            pages = pages.splice(0, buttonsCount);
        else if (pagination.currentPage >= pagination.pagesCount - halfCount)
            pages = pages.splice(pagination.pagesCount - buttonsCount, buttonsCount);
        else
            pages = pages.splice(pagination.currentPage - (halfCount + 1), buttonsCount);

        if (pagination.currentPage > (halfCount + 1)){
            pages[0] = { type: 'page', page: 1 };
            pages[1] = { type: 'filler' };
        }

        if (pagination.currentPage < pagination.pagesCount - halfCount){
            pages[buttonsCount - 2] = { type: 'filler' }
            pages[buttonsCount - 1] = { type: 'page', page: pagination.pagesCount };
        }   
    }

    return pages;
}

export default usePaginationButtonsData;