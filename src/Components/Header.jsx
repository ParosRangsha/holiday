import React from 'react'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-[999]">
        <Menu/>
        <Search/>
    </div>
  )
}

export default Header