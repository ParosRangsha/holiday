import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import { Link } from 'react-router-dom'
import { menus } from '../mydata/Menudata'

const Menu = () => {
    let menulist = useContext(menus)
  return (
    <Container>
        <div className="menu flex items-center py-[32px] z-50">
            <div className="logo w-[15%]">
                <img src={logo} alt="logo" />
            </div>
            <div className="menus w-[85%]">
                <ul className='flex justify-center gap-3'>
                    {
                        menulist.map((item, i)=>(
                            <li key={i} className='cursor-pointer'>
                                <Link to={`/${item}`}>{item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Menu