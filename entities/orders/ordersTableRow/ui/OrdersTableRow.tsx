import { FC } from 'react';

import OrderApproveButton from '../../../../features/orders/orderApproveButton/ui';

import { Order } from '../../../../shared/api/orders/types';

const OrdersTableRow: FC<Order> = (order) => {
    return <tr>
        <td><a href={`mailto:${order.email}`}>{order.email}</a></td>
        <td>{order.project}</td>
        <td>{(order.amount).toLocaleString('ru-RU')} ₽</td>
        <td>{order.order}</td>

        <td>
            {order.type == 'created' ? 
                <OrderApproveButton order={order.order}/>
                :
                <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
            }
        </td>

        <td>{order.datetime}</td>
    </tr>
};

export default OrdersTableRow;