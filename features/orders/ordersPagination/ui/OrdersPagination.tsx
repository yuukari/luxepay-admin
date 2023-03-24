import { FC } from 'react';
import cn from 'classnames';

import { Pagination } from '../../../../shared/api/orders/types';

type OrdersPaginationProps = {
    pagination: Pagination,

    onPageSelect: (page: number) => void,
    onNextClick: () => void,
    onPrevClick: () => void
}

const OrdersPagination: FC<OrdersPaginationProps> = (props) => {
    const { pagination, onPageSelect, onNextClick, onPrevClick } = props;

    const pages: number[] = [];

    for (let i = 1; i <= pagination.pagesCount; i++)
        pages.push(i);

    const scrollToBottom = () => {
        // if (window !== undefined)
        //     window.scrollTo(0, document.body.scrollHeight);
    }

    return <div className="mt-8 w-full">
        {pages.length > 1 && <div className="btn-group mx-auto w-fit">
            <button 
                className="btn" 
                disabled={pagination.currentPage == 1}
                
                onClick={() => { onPrevClick(); scrollToBottom(); }}
            >«</button>
        
            {pages.map((page) => {
                return <button 
                    className={cn(["btn", {"btn-active": page == pagination.currentPage}])}
                    onClick={() => { onPageSelect(page); scrollToBottom(); }}
                >{page.toString()}</button>
            })}

            <button
                className="btn"
                disabled={pagination.currentPage == pagination.pagesCount}
            
                onClick={() => { onNextClick(); scrollToBottom(); }}
            >»</button>
        </div>}
    </div>
};

export default OrdersPagination;