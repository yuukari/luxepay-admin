import { FC } from 'react';

import OrdersPagination from '../../../entities/orders/ordersPagination/ui';
import OrdersTable from '../../../entities/orders/ordersTable/ui';
import OrderSearchInput from '../../../features/orders/orderSearchInput/ui';
import OrderShopFilter from '../../../features/orders/orderShopFilter/ui';

const OrdersTableWidget: FC = () => {
    return <div className="mt-8">
        <div className="flex mb-4 justify-end gap-4">
            <OrderShopFilter/>
            <OrderSearchInput/>
        </div>

        <OrdersTable/>
        <OrdersPagination/>
    </div>;
};

export default OrdersTableWidget;