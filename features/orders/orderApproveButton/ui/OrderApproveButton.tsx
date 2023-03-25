import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import Button from '../../../../shared/ui/button';

import { useApproveOrderMutation } from '../../../../shared/api/orders';

type OrderApproveButtonProps = {
    order: string,
}

const OrderApproveButton: FC<OrderApproveButtonProps> = (props) => {
    const { order } = props;

    const [loading, setLoading] = useState(false);

    const [ approveOrder, { isLoading } ] = useApproveOrderMutation({
        fixedCacheKey: 'sharedApproveOrder'
    });

    useEffect(() => {
        if (!isLoading)
            setLoading(false);
    }, [isLoading]);

    const handleClick = () => {
        setLoading(true);
        approveOrder({ order });
    }

    return <Button
        className={cn([
            "btn-sm",
            {"animate-pulse": loading}
        ])}

        variant="primary"
        text="Подтвердить оплату"
        disabled={loading}

        onClick={handleClick}
    />
};

export default OrderApproveButton;