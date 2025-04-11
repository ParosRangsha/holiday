import React, { useContext, useEffect, useState } from 'react'
import { Apidata } from '../mydata/ProductsApi'
import {Link} from 'react-router-dom'
import Banner from '../Components/Banner'
import lamp from '../assets/lamp.png'
import Container from '../Components/Container'
import Mybtn from '../Components/Mybtn'
import adsOne from '../assets/ads1.png'
import adsTwo from '../assets/ads2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  let info = useContext(Apidata)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "red", top: "50%", right: "0", transform:"translateY(-50%)", height: "50px", width: "50px", borderRadius: "50%", justifyContent: "center", alignItems: "center" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "green", top: "50%", left: "0", zIndex: "2", height: "50px", width: "50px", borderRadius: "50%", justifyContent: "center", alignItems: "center" }}
        onClick={onClick}
      />
    );
  }  
  var sliderArrival = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="pop fixed top-0 left-0 h-[100vh] w-[100vw] bg-[#f00] z-[999] flex justify-center items-center">
        <h1 className='text-[70px] text-[#fff]'>This page is under construction</h1>
      </div>
      <Banner/>
      <div className="offer">
        <Container>
          <div className="py-[50px] flex gap-8">
            <div className='w-1/2 relative'>
              <div className="thumb">
                <img src={lamp} alt="thumb" />
              </div>
              <div className="text absolute bottom-[72px] left-[64px] flex flex-col gap-3">
                <h1>Phones Sale</h1>
                <div className="percent flex items-center">
                  <h3>Up to</h3>
                  <h3>30%</h3>
                  <h3>sale for all products!</h3>
                </div>
                <Mybtn cap='Shop Now' ink='/shop'/>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-8">
              <div className="relative">
                <img src={adsOne} alt="thumb" />
                <div className="text absolute bottom-[72px] left-[64px] flex flex-col gap-3">
                  <h1>Electronics Sale</h1>
                  <div className="percent flex items-center">
                    <h3>Up to</h3>
                    <h3>70%</h3>
                    <h3>sale for all products!</h3>
                  </div>
                  <Mybtn cap='Shop Now' ink='/shop'/>
                </div>
              </div>
              <div className="relative">
                <img src={adsTwo} alt="thum" />
                <div className="text absolute bottom-[72px] left-[64px] flex flex-col gap-3">
                  <h1>Furniture Offer</h1>
                  <div className="percent flex items-center">
                    <h3>Up to</h3>
                    <h3>50%</h3>
                    <h3>sale for all products!</h3>
                  </div>
                  <Mybtn cap='Shop Now' ink='/shop'/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="newarrival py-[50px]">
        <Container>
          <h1 className='text-[40px] font-bold'>New Arrivals</h1>
          <div className="products justify-between">
            <Slider {...sliderArrival}>
              {info.map((item, i)=>(
                <div className="" key={i}>
                  <div className="items bg-[#efefef] p-[30px] mx-[5px] hover:bg-[#555] hover:text-[#fff] duration-[1s]">
                    <div className="thumb">
                      <Link to={`/home/${item.id}`}>
                        <img src={item.thumbnail} alt="" />
                      </Link>
                    </div>
                    <div className="title flex justify-between items-center">
                      <p className='font-bold'>{item.title.substring(0, 15)}</p>
                      <p>${item.price}</p>
                    </div>
                    <p>{item.category}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home