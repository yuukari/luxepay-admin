import { FC, useEffect, useState } from 'react';

import OrdersTable from '../../../entities/orders/ordersTable/ui';
import OrderShopFilter from '../../../features/orders/orderShopFilter/ui';
import OrderSearchInput from '../../../features/orders/orderSearchInput/ui';
import OrdersPagination from '../../../features/orders/ordersPagination/ui';
import Button from '../../../shared/ui/button';

import { useListOrdersQuery } from '../../../shared/api/orders';

import { useOrdersNotifications } from '../../../features/orders/ordersNotifications/hooks';

const OrdersTableWidget: FC = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [shop, setShop] = useState("");

    const { data: ordersData, isFetching, isError, refetch } = useListOrdersQuery({
        page,
        search,
        shop
    });

    const orders = ordersData ? ordersData.orders : undefined;
    const pagination = ordersData ? ordersData.pagination : undefined;
    const hasError = isError || ordersData?.error;

    useOrdersNotifications();

    useEffect(() => {
        setPage(1);
    }, [search, shop]);

    useEffect(() => {
        refetch();
    }, []);

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
        {!hasError && <div className="flex mb-4 justify-end gap-4">
            <OrderShopFilter
                value={shop}
                onSelect={handleShopChange}
            />
            <OrderSearchInput
                value={search}
                onChange={handleSearchChange}
            />
        </div>}

        {!hasError && <OrdersTable
            orders={orders}
            isFetching={isFetching}
        />}

        {(!isFetching && !hasError && pagination) && <OrdersPagination
            pagination={pagination}

            onPageSelect={handlePageSelect}
            onNextClick={handleNextPageClick}
            onPrevClick={handlePrevPageClick}
        />}

        {(!isFetching && hasError) && <div className="mt-24 mx-auto w-fit min-w-[270px] p-6 bg-base-300 rounded-lg">
            <p className="text-center text-red-400 text-sm">Ошибка загрузки данных</p>
            {(ordersData && ordersData.error) && <p className="text-center text-red-400 text-sm">{ordersData.error}</p>}
        
            <Button
                className="btn-sm w-fit mt-6 mx-auto block"
                text="Обновить"

                onClick={refetch}
            />
        </div>}
    </div>;
};

export default OrdersTableWidget;