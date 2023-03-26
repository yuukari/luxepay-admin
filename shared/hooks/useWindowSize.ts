import { useLayoutEffect, useState } from "react";

type WindowSize = {
    width: number,
    height: number
}

const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState([0, 0]);
 
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        
        return () => window.removeEventListener('resize', updateSize);
    }, []);
 
    return {
        width: size[0],
        height: size[1]
    }
}

export default useWindowSize;