import { useEffect, useState } from "react";

const useFetch = (url="", options = null)=>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        let isMounted = true;
        fetch(url, options)
        .then(res=>res.json())
        .then(data=>{
            if(isMounted){
                setData(data);
                setError(null);
            }
        }).catch(error=>{
            if(isMounted){
                setError(error);
                setData(null);
            }
        }).finally(()=>isMounted && setLoading(false))

        return ()=>(isMounted = false);
    }, [url, options])

    return {data, error, loading}
}

export default useFetch;