import React from 'react'
import HomeCard from '../../components/homes/HomeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Homes from '../../components/homes/Homes';


const SampleNextArrow = (props)=>{
    const { onClick } = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'> <FiChevronRight/></button>
        </div>
    )
}


const SamplePrevArrow = (props)=>{
    const { onClick } = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'> <FiChevronLeft/></button>
        </div>
    )
}

export default function Home({ items }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <div className='homeContainer'>
                <Slider {...settings}>
                    {
                        items.map((item) => (
                            <HomeCard key={item.id} item={item} />
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}
