import { ChangeEvent, FC } from 'react';

import Input from '../../../../shared/ui/input';

type OrderSearchInputProps = {
    value: string,
    onChange: (search: string) => void
}

const OrderSearchInput: FC<OrderSearchInputProps> = (props) => {
    const { value, onChange } = props;
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
    }

    return <Input
        className="md:w-full md:max-w-[180px] max-w-none w-1/2"
        name="orderSearch"
        placeholder="Поиск по номеру"
        value={value}

        onChange={handleChange}
    />
};

export default OrderSearchInput;