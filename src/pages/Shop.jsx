import React, { useContext, useEffect, useState } from 'react'
import Container from '../Components/Container'
import { Apidata } from '../mydata/ProductsApi'
import { IoGrid } from "react-icons/io5";
import { FaThList, FaHeart, FaShoppingCart} from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { Link } from 'react-router-dom';




const Shop = () => {
  let info = useContext(Apidata)
  let [category, setCategory] = useState([])
  let [brand, setBrand] = useState([])
  let [showData, setshowData] = useState([])
  let [view, setview] = useState(false)
  let [datashowview, setdatashowview] = useState([])
  
  let [startProduct, setStartProduct] = useState(0)
  let [endProduct, setEndProduct] = useState(startProduct + 6)



  useEffect(()=>{
    let dataslice = info.slice(startProduct, endProduct)
    setdatashowview(dataslice)
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrand([...new Set(info.map((item) => item.brand))]);
  }, [info])

  let handlecate = (citem)=>{
    let catefilter = info.filter((item)=> item.category === citem)
    setshowData(catefilter)
    
  }
  let handlebrand = (citem)=>{
    let brandfilter = info.filter((item)=> item.brand === citem)
    setshowData(brandfilter)
    
  }
  let showgrid = ()=>{
    setview(false)
  }
  let showlist = ()=>{
    setview(true)
  }
  
 
  return (
    <div className="shop py-[50px]">
      <Container>
        <h1 className='text-[48px] font-bold'>Poducts</h1>
        <div className="flex justify-between">
          <div className="sidemenu w-[20%]">
            <div className="sidelist pb-[30px]">
              <h1 className='text-[20px] font-bold'>Shop By Category</h1>
              <ul>
                {
                  category.map((item, i)=>(
                    <li key={i} className='py-[10px] cursor-pointer' onClick={()=>handlecate(item)}>{item}</li>
                  ))
                }
              </ul>
            </div>
            <div className="sidelist">
              <h1 className='text-[20px] font-bold'>Shop By Brand</h1>
              <ul className='h-[200px] overflow-y-scroll'>
                {
                  brand.map((item, i)=>(
                    <li key={i} className='py-[10px] cursor-pointer' onClick={()=>handlebrand(item)}>{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="viewmenu w-[78%]">
            <div className="heading bg-[#eee] flex justify-between items-center p-[5px]">
              <div className="viewthumb flex">
                <div className={`gor p-[10px] hover:text-[#f00] hover:bg-[#000] ${view ? 'bg-[#eee] text-[#000]' : 'bg-[#000] text-[#fff]'}`} onClick={()=>showgrid()}>
                  <IoGrid/>
                </div>
                <div className={`gor p-[10px] hover:text-[#f00] hover:bg-[#000] ${view ? 'bg-[#000] text-[#fff]' : 'bg-[#eee] text-[#000]'}`} onClick={()=>showlist()}>
                  <FaThList/>
                </div>
              </div>
              <div className="sort flex gap-3">
                <div className="sortby flex">
                  <p>Sort by: </p>
                  <select name="sortby">
                    <option value="Sort by">Sort by</option>
                    <option value="Category">Category</option>
                    <option value="Brand">Brand</option>
                    <option value="Price">Price</option>
                  </select>
                </div>
                <div className="showproduct flex">
                  <p>Show :</p>
                  <select name="showproduct">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={`${view ? 'products py-[15px]' : 'products py-[15px] flex flex-wrap justify-between'}`}>
              {
                showData.length > 0 ?
                showData.map((item, i)=>(
                  <div key={i} className={`${view ? 'items w-full p-[20px] bg-[#efffef] mb-[10px] hover:bg-[#ddd] relative overflow-hidden group' : 'items w-[32%] p-[20px] bg-[#efffef] mb-[10px] hover:bg-[#ddd] relative overflow-hidden group'}`}>
                    <div className={`${view ? 'flex items-center gap-5':'block'}`}>
                      <Link to={`${item.id}`}>
                        <img src={item.thumbnail} alt="thumb" className={`${view ? 'w-[100px]': 'w-full'}`} />
                      </Link>
                      <div className={`${view ? 'block' : 'flex justify-between items-center'}`}>
                        <h1 className='font-bold'>{item.title}</h1>
                        <p>${item.price}</p>
                      </div>
                      <h1>Category: {item.category}</h1>
                    </div>
                    <div className={`${view ? 'absolute bottom-0 right-0 w-[200px] opacity-0 group-hover:opacity-100 duration-[1s]' : 'absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 duration-[1s]'}`}>
                      <ul className='p-[20px] bg-[#900] text-[#fff]'>
                        <li className='text-right flex items-center justify-end gap-2 py-[5px] cursor-pointer'>Add To White List <FaHeart /></li>
                        <li className='text-right flex items-center justify-end gap-2 py-[5px] cursor-pointer'>Compare <HiMiniArrowPath /></li>
                        <li className='text-right flex items-center justify-end gap-2 py-[5px] cursor-pointer'>Add To Cart <FaShoppingCart /></li>
                      </ul>
                    </div>
                  </div>
                ))
                :
                datashowview.map((item, i)=>(
                  <div key={i} className={`${view ? 'items w-full p-[20px] bg-[#efffef] mb-[10px] hover:bg-[#ddd] relative overflow-hidden group' : 'items w-[32%] p-[20px] bg-[#efffef] mb-[10px] hover:bg-[#ddd] relative overflow-hidden group'}`}>
                    <div className={`${view ? 'flex items-center gap-5':'block'}`}>
                      <Link to={`${item.id}`}>
                        <img src={item.thumbnail} alt="thumb" className={`${view ? 'w-[100px]': 'w-full'}`} />
                      </Link>
                      <div className={`${view ? 'block' : 'flex justify-between items-center'}`}>
                        <h1 className='font-bold'>{item.title}</h1>
                        <p>${item.price}</p>
                      </div>
                      <h1>Category: {item.category}</h1>
                    </div>
                    <div className={`${view ? 'absolute bottom-0 right-0 w-[200px] opacity-0 group-hover:opacity-100 duration-[1s]' : 'absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 duration-[1s]'}`}>
                      <ul className='p-[20px] bg-[#900] text-[#fff]'>
                        <li className='text-right flex items-center justify-end gap-2 py-[5px] cursor-pointer'>Add To White List <FaHeart /></li>
                        <li className='text-right flex items-center justify-end gap-2 py-[5px] cursor-pointer'>Compare <HiMiniArrowPath /></li>
                        <li className='text-right flex items-center justify-end gap-2 py-[5px] cursor-pointer'>Add To Cart <FaShoppingCart /></li>
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop