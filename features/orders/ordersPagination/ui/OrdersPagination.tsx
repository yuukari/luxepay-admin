import { FC } from 'react';
import cn from 'classnames';

import { Pagination } from '../../../../shared/api/orders/types';

import { usePaginationButtonsData, usePaginationButtonsCount } from '../hooks';

type OrdersPaginationProps = {
    pagination: Pagination,

    onPageSelect: (page: number) => void,
    onNextClick: () => void,
    onPrevClick: () => void
}

const OrdersPagination: FC<OrdersPaginationProps> = (props) => {
    const { pagination, onPageSelect, onNextClick, onPrevClick } = props;

    const buttonsCount = usePaginationButtonsCount(); 
    const buttons = usePaginationButtonsData(pagination, buttonsCount);

    const scrollToBottom = () => {
        // if (window !== undefined)
        //     window.scrollTo(0, document.body.scrollHeight);
    }

    return <div className="mt-8 w-full">
        {buttons.length > 1 && <div className="btn-group mx-auto w-fit">
            <button 
                className="btn btn-sm md:btn-md" 
                disabled={pagination.currentPage == 1}
                
                onClick={() => { onPrevClick(); scrollToBottom(); }}
            >«</button>
        
            {buttons.map((button) => {
                if (button.type == 'page')
                    return <button 
                        className={cn(["btn btn-sm md:btn-md", {"btn-active": button.page == pagination.currentPage}])}
                        onClick={() => { onPageSelect(button.page!); scrollToBottom(); }}
                    >{button.page!.toString()}</button>
                else
                    return <button className="btn btn-sm md:btn-md" disabled>...</button>
            })}

            <button
                className="btn btn-sm md:btn-md"
                disabled={pagination.currentPage == pagination.pagesCount}
            
                onClick={() => { onNextClick(); scrollToBottom(); }}
            >»</button>
        </div>}
    </div>
};

export default OrdersPagination;