import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";


export default class ImgSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
        };
        return (
            <Carousel {...settings}>
               <Wrap>
                   <img src="/images/slider-badging.jpg"/>
               </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scale.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scales.jpg"/>
                </Wrap>
            </Carousel>
        );
    }
}

const Carousel = styled(Slider)`

  ul li button{
    &:before{
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  
  button{
    z-index: 1;
  }
  
  li.slick-active button:before{
    color:white;
  }
    
  .slick-list{
    overflow: visible;
  }
  
`

const Wrap = styled.div`
  cursor: pointer;

  img{
    width: 100%;
    height: 100%;
    border-radius: 2px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    
    &:hover{
      border: 4px solid rgb(249, 249, 249, 0.8);
    }
  }
`
