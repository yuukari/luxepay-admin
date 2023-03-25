import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { setLoading } from '../../model/preloader';

const Preloader: FC = () => {
    const loading = useAppSelector(state => state.preloader.loading);
    const dispatch = useAppDispatch();

    const [hidden, setHidden] = useState(false);

    const hidePreloader = () => {
        dispatch(setLoading(false));
        setTimeout(() => setHidden(true), 300);
    }

    useEffect(() => {
        if (window != undefined){
            window.onload = hidePreloader;
            return () => { window.onload = null; }
        }
    }, []);
    
    return <div className={cn([
        "w-full h-screen bg-base-200 fixed top-0 left-0 flex justify-center items-center z-[100]",
        {["animate-fade-out"]: !loading},
        {["hidden"]: hidden}
    ])}>
        <div className="w-32 h-32 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="5" r="28" stroke-dasharray="131.94689145077132 45.982297150257104">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    </div>;
};

export default Preloader;