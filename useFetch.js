import { useRef, useState } from "react"
import { useEffect } from "react/cjs/react.development";

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data:null, loading:true, error:null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    },[])

    useEffect( () => {

        setstate({data:null, loading:true, error:null});

        // const json = await fetch(url);
        // const data = await json.json();
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if(isMounted.current){
                console.log(isMounted.current);
                setstate({
                    loading: false,
                    error: null,
                    data
                });
            }
            
    });
    }, [url]);

    return state;
}
