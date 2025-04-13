import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Construction from './Construction'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Construction/>
    </>
  )
}

export default Layout