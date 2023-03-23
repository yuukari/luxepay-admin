import { FC } from 'react';

const OrdersTableSkeletonRow: FC = () => {
    return <tr className="animate-pulse">
        <th className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </th>
        <th className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </th>
        <th className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </th>
        <th className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </th>
        <th className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </th>
        <th className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </th>
    </tr>
};

export default OrdersTableSkeletonRow;