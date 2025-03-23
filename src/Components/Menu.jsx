import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import { Link } from 'react-router-dom'

const Menu = () => {
    let [menuList, setMenuList] = useState(['Home', 'Shop', 'About', 'Contact'])
  return (
    <Container>
        <div className="menu flex items-center py-[32px]">
            <div className="logo w-[15%]">
                <img src={logo} alt="logo" />
            </div>
            <div className="menus w-[85%]">
                <ul className='flex justify-center gap-3'>
                    {
                        menuList.map((item, i)=>(
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