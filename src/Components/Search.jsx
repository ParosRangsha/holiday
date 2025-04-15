import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Apidata } from '../mydata/ProductsApi';
import Mybtn from './Mybtn';
import { Link } from 'react-router-dom';

const Search = () => {
    let info = useContext(Apidata)
    let [catelist, setcatelist] = useState([])
    let [cateshow, setcateshow] = useState(false)
    let [usershow, setusershow] = useState(false)
    let [cartshow, setcartshow] = useState(false)
    let cateref = useRef()
    let userref = useRef()
    let cartref = useRef()
    let searchref = useRef()
    
    let [searchResult, setSearchResult] = useState('')
    let [searchFilter, setSearchFilter] = useState([])
    let handlesearch = (e)=>{
        setSearchResult(e.target.value);
        if(e.target.value == ''){
            setSearchFilter([])
        }else{
            let searchget = info.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchget)
        }

    } 
    
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
            if(searchref.current.contains(e.target)){
                
            }else{
                setSearchFilter([])
            }
        })
        setcatelist([...new Set(info.map((item) => item.category))]);
    },[info, cateshow, usershow, cartshow])

    
    
  return (
    <div className="searchbar bg-[#D8D8D8] z-50">
        <Container>
            <div className="flex items-center">
                <div className="category flex items-center gap-3 w-[33%] relative py-[25px] z-50" ref={cateref}>
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
                <div className="searchbox w-[33%] z-50 relative">
                    <input type="text" placeholder='Search Products' className='w-full py-[16px] px-[21px] outline-none' onChange={handlesearch} ref={searchref}/>
                    <CiSearch className='absolute top-[50%] right-[21px] translate-y-[-50%]'/>
                    <ul className={`absolute top-[100%] left-0 w-full overflow-scroll bg-[#922] text-[#fff] px-[20px] ${searchFilter.length > 0 ? 'h-[300px]' : 'h-0'}`}>
                        {
                            searchFilter.map((item, i)=>(
                                <Link key={i} to={`search/${item.id}`}>
                                    <li className='flex justify-between items-center cursor-pointer hover:bg-[#eee] hover:text-[#000] p-[10px]'>
                                        <p>{item.title}</p>
                                        <img src={item.thumbnail} alt="" className='w-[50px]'/>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="btnicon w-[33%] flex justify-end gap-3 relative z-50">
                    <div className="user flex items-center  py-[25px]" ref={userref}>
                        <FaUser/><IoIosArrowDown/>
                        {
                            usershow &&
                            <ul className='absolute bg-[#000] text-[#fff] top-full w-[200px] right-0'>
                                <li className='py-[16px] px-[21px] hover:px-[40px] duration-[0.5s] cursor-pointer hover:bg-[#fff] hover:text-[#000]'><Link to='/login'>My Account</Link></li>
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