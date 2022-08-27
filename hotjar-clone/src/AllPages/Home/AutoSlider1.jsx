import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Slider1Data} from "./SliderData"



const AutoSlider1=()=>{
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 7,
    //   slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1,
      cssEase: "linear"
    };
    console.log(Slider1Data)
    return (
        <>
      <div style={{width:'100%',margin:'auto',marginTop:'20px',marginBottom:'20px'}}>
    
        <Slider {...settings}>
            {
                Slider1Data.map((el)=>{
                    return(
                        <div>
                            <img src={el.logo_url}/>
                        </div>
                    )
                })
            }
          
        </Slider>
      </div>
    </>);
  }

  export default AutoSlider1
