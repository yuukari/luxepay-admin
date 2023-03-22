import { FC } from 'react';

const OrdersPagination: FC = () => {
    return <div className="mt-8 w-full">
        <div className="btn-group mx-auto w-fit">
            <button className="btn" disabled>«</button>
            <button className="btn btn-active">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">»</button>
        </div>
    </div>
};

export default OrdersPagination;