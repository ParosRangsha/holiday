import React, { useContext, useEffect, useState } from 'react'
import { Apidata } from '../mydata/ProductsApi'
import Banner from '../Components/Banner'
import lamp from '../assets/lamp.png'
import Container from '../Components/Container'

const Home = () => {
  let info = useContext(Apidata)

  return (
    <>
      <Banner/>
      <Container>
        <div className="py-[50px]">
          <div className={`w-1/2 bg-[url('${lamp}')] h-[300px]`}>
            <h1>Phones Sale</h1>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home