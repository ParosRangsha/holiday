import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { menus } from '../mydata/Menudata'
import { Link } from 'react-router-dom'
import { Apidata } from '../mydata/ProductsApi'
import logo from '../assets/logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  let mlist = useContext(menus)
  let info = useContext(Apidata)
  let [catelist, setcatelist] = useState([])
  let [helplist, sethelplist] = useState(['Privacy Policy', 'Terms & Conditions', 'Special E-shop', 'Shipping', 'Secure Payments'])
  useEffect(()=>{
    setcatelist([...new Set(info.map((item) => item.category))]);
  },[info, mlist])
  return (
    <div className="w-full bg-[#D8D8D8] py-[55px]">
      <Container>
        <div className="flex">
          <div className="w-1/2 flex justify-between">
            <ul>
              {
                mlist.map((item, i)=>(
                  <li className='py-[3px]' key={i}><Link to={`${item}`}>{item}</Link></li>
                ))
              }
            </ul>
            <ul>
              {
                catelist.map((item, i)=>(
                  <li key={i} className='py-[3px] cursor-pointer'>{item.toUpperCase()}</li>
                ))
              }
            </ul>
            <ul>
              {
                helplist.map((item, i)=>(
                  <li key={i}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="w-1/2 flex">
            <div className="mail w-1/2 px-[100px]">
              <p>+8801705620421</p>
              <p>company@domain.com</p>
            </div>  
            <div className="logo w-1/2 flex justify-end items-start">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="icon pt-[50px] flex justify-between">
          <div className="icons w-1/2 flex items-center gap-3">
              <Link to='/facebook'><FaFacebookF/></Link>
              <Link to='/linkedin'><FaLinkedinIn /></Link>
              <Link to='/instagram'><FaInstagram  /></Link>
          </div>
          <div className="">
            <p>2025 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer