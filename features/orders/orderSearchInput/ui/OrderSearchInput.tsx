import { FC } from 'react';

import Input from '../../../../shared/ui/input';

const OrderSearchInput: FC = () => {
    return <Input
        className="md:w-full md:max-w-[180px] max-w-none w-1/2"
        name="orderSearch"
        placeholder="Поиск по номеру"
    />
};

export default OrderSearchInput;