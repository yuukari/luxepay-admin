import { FC } from 'react';

const OrdersTableSkeletonRow: FC = () => {
    return <tr className="animate-pulse">
        <td className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </td>
        <td className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </td>
        <td className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </td>
        <td className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </td>
        <td className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </td>
        <td className="text-transparent">
            <p className="bg-gray-500 rounded">order</p>
        </td>
    </tr>
};

export default OrdersTableSkeletonRow;