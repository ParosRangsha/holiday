import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Components/Container'

const Productdetails = () => {
    let productid = useParams()
    let [singleProduct, setSingleProduct] = useState([])
    let singledata = ()=>{
        axios.get(`https://dummyjson.com/products/${productid.id}`).then((res)=>{
            setSingleProduct(res.data)
            
        })
    }
    useEffect(()=>{
        singledata()
    },[])
  return (
    <>
    <div className="productDetails">
        <Container>
            <div className="heading">
                <h1 className='text-[48px] font-bold'>Product Details</h1>
            </div>
            <div className="thumb w-full flex justify-center items-center">
                <img src={singleProduct.thumbnail} alt="thumbnail" />
            </div>
            <div className="details">
                <div className="rating">
                    <p>Rating: {singleProduct.rating} out of 5.00</p>
                </div>
                <div className="price flex gap-2">
                    <p>Price: ${singleProduct.price}</p>
                    <del>${Math.floor(singleProduct.price + 10)}.00</del>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Productdetails