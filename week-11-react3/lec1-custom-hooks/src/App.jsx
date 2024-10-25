import React, { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';
// import { useDebounce } from './hooks/useDebounce';

function useDebounce(value, delay){
    const [debouncedVal, setDebouncedVal] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedVal(value);
        }, delay);

        return ()=>{
            clearTimeout(handler);
        }
    }, [value, delay]);
    return [debouncedVal];
}
const App = () => {
    const [input, setIput] = useState("");
    const debouncedVal = useDebounce(input, 200);
    function change(e){
        setIput(e.target.value);
    }
    useEffect(()=>{
        console.log("expensive operation");
    }, debouncedVal)
    return(
        <>
            <input type="text" onChange={change} />
        </>
    )
}

export default App
