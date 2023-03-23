import { FC } from 'react';

import Button from '../../../../shared/ui/button';

import { Order } from '../../../../shared/api/orders/types';

const OrdersTableRow: FC<Order> = (order) => {
    return <tr>
        <th>{order.order}</th>
        <td><a href={`mailto:${order.email}`}>{order.email}</a></td>
        <td>{order.project}</td>
        <td>{(order.amount).toLocaleString('ru-RU')} ₽</td>
        <td>{order.datetime}</td>

        <td>
            {order.type == 'created' ? 
                <Button
                    className="btn-sm"
                    variant="primary"
                    text="Подтвердить оплату"
                />
            :
                <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
            }
        </td>
    </tr>
};

export default OrdersTableRow;