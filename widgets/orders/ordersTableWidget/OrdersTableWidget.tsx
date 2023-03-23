import { FC, useState } from 'react';

import OrderShopFilter from '../../../features/orders/orderShopFilter/ui';
import OrderSearchInput from '../../../features/orders/orderSearchInput/ui';
import OrdersTable from '../../../entities/orders/ordersTable/ui';
import OrdersPagination from '../../../entities/orders/ordersPagination/ui';

const OrdersTableWidget: FC = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [shop, setShop] = useState("");

    const handleSearchChange = (search: string) => {
        setSearch(search);
    }

    const handleShopChange = (shop: string) => {
        setShop(shop);
    }

    const handlePageSelect = (page: number) => {
        setPage(page);
    }

    const handleNextPageClick = () => {
        setPage(page + 1);
    }

    const handlePrevPageClick = () => {
        if (page > 1)
            setPage(page - 1);
    }

    return <div className="mt-8">
        <div className="flex mb-4 justify-end gap-4">
            <OrderShopFilter/>
            <OrderSearchInput
                value={search}
                onChange={handleSearchChange}
            />
        </div>

        <OrdersTable
            page={page}
            search={search}
            shop={shop}
        />

        <OrdersPagination
            currentPage={page}

            onPageSelect={handlePageSelect}
            onNextClick={handleNextPageClick}
            onPrevClick={handlePrevPageClick}
        />
    </div>;
};

export default OrdersTableWidget;