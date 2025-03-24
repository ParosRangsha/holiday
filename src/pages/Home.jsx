import React, { useContext, useEffect, useState } from 'react'
import { Apidata } from '../mydata/ProductsApi'
import Banner from '../Components/Banner'
import lamp from '../assets/lamp.png'
import Container from '../Components/Container'
import Mybtn from '../Components/Mybtn'

const Home = () => {
  let info = useContext(Apidata)

  return (
    <>
      <Banner/>
      <Container>
        <div className="py-[50px]">
          <div className='w-1/2 relative'>
            <div className="thumb">
              <img src={lamp} alt="thumb" />
            </div>
            <div className="text absolute bottom-[100px] left-0 flex flex-col gap-3">
              <h1>Phones Sale</h1>
              <div className="percent flex items-center">
                <h3>Up to</h3>
                <h3>30%</h3>
                <h3>sale for all products!</h3>
              </div>
              <Mybtn cap='Shop Now' ink='/shop'/>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home