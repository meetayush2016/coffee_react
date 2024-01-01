//custom hook can use builtin hooks

import { useState } from "react";
import { useEffect } from "react";


function useCurrencyinfo(currency){
    useEffect(()=>{
        const[data,setData] = useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((e)=> e.json())
        .then((res)=>setData(res[currency]))
    },[currency])

    return data;
}


export default useCurrencyinfo; 