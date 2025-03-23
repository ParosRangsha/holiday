import React, { useContext } from 'react'
import { Apidata } from '../mydata/ProductsApi'

const Home = () => {
  let info = useContext(Apidata)
  
  return (
    <>
      <h1>This is home pages</h1>
    </>
  )
}

export default Home