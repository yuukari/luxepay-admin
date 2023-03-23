import { FC } from 'react';

import OrdersTableRow from '../../ordersTableRow/ui';
import OrdersTableSkeletonRow from '../../ordersTableSkeletonRow/ui';

import { useListOrdersQuery } from '../../../../shared/api/orders';

type OrdersTableProps = {
    page: number,
    search?: string,
    shop?: string
}

const OrdersTable: FC<OrdersTableProps> = (props) => {
    const { page, search, shop } = props;
    
    const { data: ordersData, isFetching, isError } = useListOrdersQuery({
        page,
        search,
        shop
    });
    
    return <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th>Номер заказа</th>
                    <th>E-Mail</th>
                    <th>Магазин</th>
                    <th>Сумма оплаты</th>
                    <th>Дата оплаты</th>
                    <th>Действия</th>
                </tr>
            </thead>

            {(!isFetching && !isError) && <tbody>
                {(ordersData && ordersData.error == undefined) && ordersData.orders!.map(order => {
                    return <OrdersTableRow {...order}/>
                })}
            </tbody>}

            {isFetching && <tbody>
                {[1,2,3,4,5,6,7,8,9,10].map(() => <OrdersTableSkeletonRow/>)}
            </tbody>}
        </table>
    </div>
};

export default OrdersTable;