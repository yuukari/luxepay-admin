import { FC } from 'react';

import OrdersTableRow from '../../ordersTableRow/ui';
import OrdersTableSkeletonRow from '../../ordersTableSkeletonRow/ui';

import { Order } from '../../../../shared/api/orders/types';

type OrdersTableProps = {
    orders?: Order[],
    isFetching: boolean
}

const OrdersTable: FC<OrdersTableProps> = (props) => {
    const { orders, isFetching } = props;
    
    return <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th style={{ position: 'inherit' }}>Номер заказа</th>
                    <th>E-Mail</th>
                    <th>Магазин</th>
                    <th>Сумма оплаты</th>
                    <th>Дата оплаты</th>
                    <th>Действия</th>
                </tr>
            </thead>

            {(!isFetching && orders != undefined) && <tbody>
                {orders.map((order, i) => {
                    return <OrdersTableRow key={i} {...order}/>
                })}
            </tbody>}

            {isFetching && <tbody>
                <OrdersTableSkeletonRow/>
                <OrdersTableSkeletonRow/>
                <OrdersTableSkeletonRow/>
                <OrdersTableSkeletonRow/>
                <OrdersTableSkeletonRow/>
            </tbody>}
        </table>
    </div>
};

export default OrdersTable;