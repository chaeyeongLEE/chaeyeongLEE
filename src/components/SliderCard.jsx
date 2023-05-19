import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card1 from "../card1.png";
import card2 from "../card2.png";
import card3 from "../card3.png";
import card4 from "../card4.png";
import card5 from "../card5.png";
import card6 from "../card6.png";

import styled from "styled-components";
export default function SliderCard(){

    const settings = {
        dots: true, //슬라이드 아래 점 보이게
        infinite: true, //무한으로 반복
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000, //넘어가는 속도
        slidesToShow: 4, //몇 장씩 보일지?
        slidesToScroll: 1, //1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: "0px",
    };

    const Div = styled.div`
      //display:flex;
      //margin-right: -150px;
    `;
    const Div1 = styled.div`
      width: 1300px;
      margin-bottom: 100px;
      margin-top: 50px;
      float: right;
      display: flex;
      flex-direction: column;
    `
    const Div2 = styled.div`
      justify-content: stretch;
      width: 1300px;
      float: left;
    `
    const News = {
        backgroundColor: '#000',
        color: 'orange',
        width:'400px',
        marginLeft:'-500px',
        marginTop:'20px',
        position: 'relative'
    }

    return(
        <>
            <Div1>
                <div style={News}>

                </div>
                <Slider {...settings}>
                    <Div>
                        <img src={card1} width={250} alt="card1" />
                    </Div>
                    <Div>
                        <img src={card2} width={250} alt="card2" />
                    </Div>
                    <Div>
                        <img src={card3} width={250} alt="card3" />
                    </Div>
                    <Div>
                        <img src={card4} width={250} alt="card4" />
                    </Div>
                    <Div>
                        <img src={card5} width={250} alt="card5" />
                    </Div>
                    <Div>
                        <img src={card6} width={250} alt="card6" />
                    </Div>
                </Slider>

            </Div1>

        <Div2>
            <Slider {...settings}>
                <Div>
                    <img src={card1} width={250} alt="card1" />
                </Div>
                <Div>
                    <img src={card2} width={250} alt="card2" />
                </Div>
                <Div>
                    <img src={card3} width={250} alt="card3" />
                </Div>
                <Div>
                    <img src={card1} width={250} alt="card4" />
                </Div>
                <Div>
                    <img src={card2} width={250} alt="card5" />
                </Div>
                <Div>
                    <img src={card3} width={250} alt="card6" />
                </Div>
            </Slider>
            <h2>test2</h2>
        </Div2>

        </>
    )
}

