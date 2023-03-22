import { FC } from 'react';

const OrderShopFilter: FC = () => {
    return <select className="select select-bordered md:w-full md:max-w-[180px] max-w-none w-1/2">
        <option selected>Все магазины</option>
        <option>SeaStore</option>
        <option>ValorantBest</option>
        <option>LuxeHack</option>
        <option>SteamGame</option>
    </select> 
};

export default OrderShopFilter;