import { useEffect, useRef } from "react";

export function usePrev(value){
    const ref = useRef();
    useEffect(()=>{
        ref.current = value;
    }, [value]);
    return ref.current;   //*this will returned first and then the useEffect will be called, 
    //* that's why this usePrev function/hook will be providing the previous value, the then the value wil be changed.
}