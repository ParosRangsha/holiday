import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let Apidata = createContext()

const ProductsApi = ({children}) => {
    let [data, setdata] = useState([])
    let getdata = ()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            setdata(res.data.products);
        })
    }
    useEffect(() => {
        getdata();
    }, []);
  return (
    <Apidata.Provider value={data}>{children}</Apidata.Provider>
  )
}

export {ProductsApi, Apidata}