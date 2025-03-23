import React, { useContext } from 'react'
import Container from './Container'
import { menus } from '../mydata/Menudata'
import { Link } from 'react-router-dom'

const Footer = () => {
  let mlist = useContext(menus)
  return (
    <div className="w-full bg-[#D8D8D8] py-[55px]">
      <Container>
        <div className="w-1/2">
        <ul>
          {
            mlist.map((item, i)=>(
              <li className='py-[3px]' key={i}><Link to={`${item}`}>{item}</Link></li>
            ))
          }
        </ul>
        </div>
      </Container>
    </div>
  )
}

export default Footer