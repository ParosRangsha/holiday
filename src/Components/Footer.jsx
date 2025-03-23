import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { menus } from '../mydata/Menudata'
import { Link } from 'react-router-dom'
import { Apidata } from '../mydata/ProductsApi'

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
      </Container>
    </div>
  )
}

export default Footer