import { FC } from 'react';

import OrdersTableRow from '../../ordersTableRow/ui';
import TableSkeletonRow from '../../../../shared/ui/tableSkeletonRow';

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
                    <th style={{ position: 'inherit' }}>E-Mail</th>
                    <th>Проект</th>
                    <th>Сумма оплаты</th>
                    <th>Номер заказа</th>
                    <th>Действия</th>
                    <th>Дата оплаты</th>
                </tr>
            </thead>

            {(!isFetching && orders != undefined) && <tbody>
                {orders.map((order, i) => {
                    return <OrdersTableRow key={i} {...order}/>
                })}
            </tbody>}

            {isFetching && <tbody>
                <TableSkeletonRow columns={6}/>
                <TableSkeletonRow columns={6}/>
                <TableSkeletonRow columns={6}/>
                <TableSkeletonRow columns={6}/>
                <TableSkeletonRow columns={6}/>
            </tbody>}
        </table>
    </div>
};

export default OrdersTable;