import React, { useContext } from 'react'
import { Apidata} from '../mydata/ProductsApi'
import Container from './Container'
import Mybtn from './Mybtn'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
    let pinfo = useContext(Apidata)
    var settings = {
        dots: true,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="">
        <Container>
            <Slider {...settings}>
            {
                pinfo.map((item, i)=>(
                    <div className='banner'>
                        <div className="flex py-[50px]">
                            <div className="txt w-1/2 flex flex-col justify-center items-center">
                                <h1 className='text-[40px] font-bold'>{item.title}</h1>
                                <div className="off flex items-center">
                                    <h3>Up to </h3>&nbsp;
                                    <h3 className='text-[20px] font-bold'> {item.discountPercentage}%</h3>&nbsp;
                                    <h3>sale for all furniture items!</h3>
                                </div>
                                <Mybtn cap='Shop Now' ink='/shop' />
                            </div>
                            <div className="thumb w-1/2 flex justify-center items-center">
                                <img src={item.thumbnail} alt="thumb"/>
                            </div>
                        </div>
                    </div>
                ))
            }
            </Slider>
        </Container>
    </div>
  )
}

export default Banner