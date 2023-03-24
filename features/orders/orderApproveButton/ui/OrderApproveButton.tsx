import { FC } from 'react';
import cn from 'classnames';

import Button from '../../../../shared/ui/button';

import { useApproveOrderMutation } from '../../../../shared/api/orders';

type OrderApproveButtonProps = {
    order: string,
}

const OrderApproveButton: FC<OrderApproveButtonProps> = (props) => {
    const { order } = props;

    const [ approveOrder, { isLoading } ] = useApproveOrderMutation();

    const handleClick = () => {
        approveOrder({ order });
    }

    return <Button
        className={cn([
            "btn-sm",
            {"animate-pulse": isLoading}
        ])}

        variant="primary"
        text="Подтвердить оплату"
        disabled={isLoading}

        onClick={handleClick}
    />
};

export default OrderApproveButton;