import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../Components/Container'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/ProductsSlice';

const Productdetails = () => {
    let dispatch = useDispatch()
    let productid = useParams()
    let [singleProduct, setSingleProduct] = useState([])
    let singledata = ()=>{
        axios.get(`https://dummyjson.com/products/${productid.id}`).then((res)=>{
            setSingleProduct(res.data)
            
        })
    }
    useEffect(()=>{
        singledata()
    },[productid])
    
    let [desShow, setDesShow] = useState(false)
    let handleHide = ()=>{
        setDesShow(false)
    }
    let handleShow = ()=>{
        setDesShow(true)
    }
    let [settingShow, setSettingShow] = useState(false)
    let handleSettingHide = ()=>{
        setSettingShow(false)
    }
    let handleSettingShow = ()=>{
        setSettingShow(true)
    }
    let [reportType, setreportType] = useState('des')
    let handleReprotDes = ()=>{
        setreportType('des')
    }
    let handleReprotRev = ()=>{
        setreportType('rev')
    }
    let navigate = useNavigate('')
    let handleCart = (item)=>{
        dispatch(addToCart({...item, qun: 1}))
    }
    
   
  return (
    <>
    <div className="productDetails py-[30px]">
        <Container>
            <div className="heading">
                <h1 className='text-[48px] font-bold'>Product Details</h1>
            </div>
            <div className="thumb w-full flex justify-center items-center">
                <img src={singleProduct.thumbnail} alt="thumbnail" />
            </div>
            <div className="details flex flex-col gap-2">
                <div className="rating">
                    <p>Rating: {singleProduct.rating} out of 5.00</p>
                </div>
                <div className="price flex gap-2">
                    <p>Price: ${singleProduct.price}</p>
                    <del>${Math.floor(singleProduct.price + 10)}.00</del>
                </div>
                <div className="flex items-center">
                    <p className='font-bold'>Stock:</p> &nbsp;
                    <p>In stock</p>
                </div>
                <div className="btns flex gap-2">
                    <Link to='/wishlist' className='inline-block py-[10px] px-[15px] bg-[#000] text-[#fff] font-bold hover:bg-[#ccc] hover:text-[#002] border-[1px] hover:border-[#002] rounded-[5px]'>Add to Wish List</Link>
                    <button onClick={()=>handleCart(singleProduct)} className='inline-block py-[10px] px-[15px] bg-[#000] text-[#fff] font-bold hover:bg-[#ccc] hover:text-[#002] border-[1px] hover:border-[#002] rounded-[5px]'>Add to Cart</button>
                </div>
                <div className="details w-[600px] bg-[#ddd]">
                    <div className="heading flex justify-between items-center">
                        <h2 className='font-bold text-[20px] px-[10px]'>FEATURES  & DETAILS</h2>
                        <div className="btns px-[10px]">
                            {desShow ?<FaMinus onClick={()=>handleHide()}/> : <FaPlus onClick={()=>handleShow()}/>}
                        </div>
                    </div>
                    {desShow && <p className='text-justify p-[10px]'>{singleProduct.description}</p>}
                </div>
                <div className="details w-[600px] bg-[#ddd]">
                    <div className="heading flex justify-between items-center">
                        <h2 className='font-bold text-[20px] px-[10px]'>SHIPPING & RETURNS</h2>
                        <div className="btns px-[10px]">
                            {settingShow ?<FaMinus onClick={()=>handleSettingHide()}/> : <FaPlus onClick={()=>handleSettingShow()}/>}
                        </div>
                    </div>
                    {settingShow && <p className='text-justify p-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat voluptatibus labore omnis, harum commodi unde eius numquam aut laborum.</p>}
                </div>
                <div className="description">
                    <div className="desttitle flex gap-2 px-[10px]">
                        <p className={`${reportType == 'des' ? 'font-bold':'font-normal cursor-pointer'}`} onClick={()=>handleReprotDes()}>Description</p>
                        <p className={`${reportType == 'rev' ? 'font-bold':'font-normal cursor-pointer'}`} onClick={()=>handleReprotRev()}>Reviews</p>
                    </div>
                    {reportType == "des" &&
                    <div className=''>
                        <p className='w-[600px] px-[10px]'>{singleProduct.description}</p>
                    </div>}
                    {reportType == "rev" &&
                    <div className='px-[10px]'>
                        <div className="">
                            <h1>hello Reviews</h1>
                        </div>
                    </div>}
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Productdetails