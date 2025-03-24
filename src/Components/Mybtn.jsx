import React from 'react'
import { Link } from 'react-router-dom'

const Mybtn = ({cap, ink}) => {
  return (
    <Link to={ink} className='py-[16px] px-[20px] bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] block w-[150px] text-center duration-[0.5s] hover:border-[1px] hover:border-[#000]'>{cap}</Link>
  )
}

export default Mybtn