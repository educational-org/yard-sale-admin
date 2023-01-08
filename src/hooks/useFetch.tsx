import { useState,useEffect } from "react";
import Axios from 'axios';

const useFetch = (endPoint:string) =>{
    const [data,setData] = useState([]);


    async function fetchData(){
        const response = await Axios.get(endPoint);
        setData(response.data);
    }
    useEffect(()=>{
        try{
            fetchData();
        }catch(error){
            console.log(error)
        }
    },[endPoint])
    return {
        data,
    }
}
export default useFetch;