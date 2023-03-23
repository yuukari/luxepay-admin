import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { useListOrdersQuery } from '../../../../shared/api/orders';

type OrdersPaginationProps = {
    currentPage: number,

    onPageSelect: (page: number) => void,
    onNextClick: () => void,
    onPrevClick: () => void
}

const OrdersPagination: FC<OrdersPaginationProps> = (props) => {
    const { currentPage, onPageSelect, onNextClick, onPrevClick } = props;

    const [pages, setPages] = useState<number[] | undefined>(undefined);

    const { data: ordersData, isFetching, isError } = useListOrdersQuery({});
    const pagination = ordersData ? ordersData.pagination : undefined;

    useEffect(() => {
        if (pagination != undefined){
            console.log(pagination.pagesCount);

            const pages: number[] = [];

            for (let i = 1; i <= pagination.pagesCount; i++)
                pages.push(i);

            setPages(pages);
        }
    }, [pagination]);

    return <div className="mt-8 w-full">
        {(!isFetching && !isError && pages != undefined && pages.length > 1) && <div className="btn-group mx-auto w-fit">
            <button 
                className="btn" 
                disabled={currentPage == 1}
                
                onClick={onPrevClick}
            >«</button>
        
            {pages.map((page) => {
                return <button 
                    className={cn(["btn", {"btn-active": page == currentPage}])}
                    onClick={() => { onPageSelect(page) }}
                >{page.toString()}</button>
            })}

            <button
                className="btn"
                disabled={currentPage == pages.length}
            
                onClick={onNextClick}
            >»</button>
        </div>}
    </div>

    // return <div className="mt-8 w-full">
    //     <div className="btn-group mx-auto w-fit">
    //         <button className="btn" disabled>«</button>
    //         <button className="btn btn-active">1</button>
    //         <button className="btn">2</button>
    //         <button className="btn">3</button>
    //         <button className="btn">4</button>
    //         <button className="btn">»</button>
    //     </div>
    // </div>
};

export default OrdersPagination;