import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Apidata } from '../mydata/ProductsApi';
import Mybtn from './Mybtn';

const Search = () => {
    let info = useContext(Apidata)
    let [catelist, setcatelist] = useState([])
    let [cateshow, setcateshow] = useState(false)
    let [usershow, setusershow] = useState(false)
    let [cartshow, setcartshow] = useState(false)
    let cateref = useRef()
    let userref = useRef()
    let cartref = useRef()
    
    useEffect(()=>{
        document.addEventListener('click',(e)=>{
            if(cateref.current.contains(e.target)){
                setcateshow(!cateshow)
            }else{
                setcateshow(false)
            }
            if(userref.current.contains(e.target)){
                setusershow(!usershow)
            }else{
                setusershow(false)
            }
            if(cartref.current.contains(e.target)){
                setcartshow(!cartshow)
            }else{
                setcartshow(false)
            }
        })
        setcatelist([...new Set(info.map((item) => item.category))]);
    },[info, cateshow, usershow, cartshow])
    
  return (
    <div className="searchbar bg-[#D8D8D8]">
        <Container>
            <div className="flex items-center">
                <div className="category flex items-center gap-3 w-[33%] relative py-[25px]" ref={cateref}>
                    <HiOutlineBars3BottomLeft/> Shop by Category
                    {
                        cateshow &&
                        <ul className='absolute bg-[#000] text-[#fff] top-full w-1/2'>
                            {
                                catelist.map((item, i)=>(
                                    <li key={i} className='py-[16px] px-[21px] hover:px-[40px] duration-[0.5s] cursor-pointer hover:bg-[#fff] hover:text-[#000]'>{item.toUpperCase()}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
                <div className="searchbox w-[33%] relative">
                    <input type="text" placeholder='Search Products' className='w-full py-[16px] px-[21px] outline-none'/>
                    <CiSearch className='absolute top-[50%] right-[21px] translate-y-[-50%]'/>
                </div>
                <div className="btnicon w-[33%] flex justify-end gap-3 relative">
                    <div className="user flex items-center  py-[25px]" ref={userref}>
                        <FaUser/><IoIosArrowDown/>
                        {
                            usershow &&
                            <ul className='absolute bg-[#000] text-[#fff] top-full w-[200px] right-0'>
                                <li className='py-[16px] px-[21px] hover:px-[40px] duration-[0.5s] cursor-pointer hover:bg-[#fff] hover:text-[#000]'>My Account</li>
                                <li className='py-[16px] px-[21px] hover:px-[40px] duration-[0.5s] cursor-pointer hover:bg-[#fff] hover:text-[#000]'>Log Out</li>
                            </ul>
                        }
                    </div>
                    <div className="cart flex items-center relative py-[25px]" ref={cartref}>
                        <FaShoppingCart/>
                        {
                            cartshow &&
                            <div className="popup absolute w-[300px] top-full right-0 bg-[#d00] p-[10px]">
                                <ul>
                                    <li className='flex items-center gap-2 relative'>
                                        <div className="thum h-[50px] w-[50px] bg-[#999]">

                                        </div>
                                        <div className="title">
                                            <h1>Product Name</h1>
                                            <h2>Product Price</h2>
                                        </div>
                                        <div className="cross absolute right-0">x</div>
                                    </li>
                                </ul>
                                <div className="subtotal py-[10px]">
                                    <p>Subtotal: <span className='font-bold'>$44.00</span></p>
                                </div>
                                <div className="btns flex gap-1">
                                    <Mybtn cap='View Cart' ink='/cart'/>
                                    <Mybtn cap='Checkout' ink='/checkout'/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Search