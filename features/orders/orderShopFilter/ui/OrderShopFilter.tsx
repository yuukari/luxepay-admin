import { ChangeEvent, FC } from 'react';

import { useShopsQuery } from '../../../../shared/api/shops';

type OrderShopFilterProps = {
    value?: string,
    onSelect: (shop: string) => void
}

const OrderShopFilter: FC<OrderShopFilterProps> = (props) => {
    const { value, onSelect } = props;

    const { data: shopsData, isFetching, isError } = useShopsQuery();
    
    const shops = shopsData ? shopsData.shops : undefined;
    const hasError = isError || shopsData?.error;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.currentTarget.value);
    }

    return <select 
        className="select select-bordered md:w-full md:max-w-[180px] max-w-none w-1/2"
        disabled={isFetching}

        onChange={handleChange}
    >
        <option selected={value == ""} value="">Все магазины</option>
        {(!hasError && shops) && shops.map((shop, i) => {
            return <option value={shop} key={i}>{shop}</option>
        })}
    </select> 
};

export default OrderShopFilter;