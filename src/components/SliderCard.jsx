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
      width: 1200px;
      float: left;
      display: flex;
      flex-direction: column;
    `
    const News = {
        //width:'400px',
        marginLeft:'-250px',
        marginBottom:'-220px'
    }

    const Service = {
        width:'400px',
        marginLeft:'1400px',
        marginBottom:'-220px'
    }

    return(
        <>
            <Div1>
                <div style={News}>
                    <h3 style={{marginTop:'10px', fontSize:'larges'}}>틸론의 새로운 <br /> 소식을 접해보세요.</h3>
                    <h1 style={{marginTop:'20px', marginBottom:'50px', fontSize:'xx-large', fontWeight:'700'}}>오늘의<br /> 틸론뉴스</h1>
                    <button style={{backgroundColor:'#dcdcdc', color:'#aaaaaa', padding:'10px', borderRadius:'7px', borderColor:'#bebebe'}}>뉴스페이지 바로가기</button>
                </div>
                <Slider {...settings}>
                    <Div>
                        <img src={card1} width={250} alt="card1" />
                    </Div>
                    <Div>
                        <img src={card3} width={250} alt="card3" />
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
                        <img src={card5} width={250} alt="card6" />
                    </Div>
                </Slider>
            </Div1>

        <Div2>
            <div style={Service}>
                <h3 style={{marginTop:'10px', fontSize:'larges'}}>틸론만의 제품을 <br /> 소개해드릴게요.</h3>
                <h1 style={{marginTop:'20px', marginBottom:'50px', fontSize:'xx-large', fontWeight:'700'}}>제품 및 서비스</h1>
                <button style={{backgroundColor:'black', color:'white', padding:'10px', borderRadius:'7px'}}> 제품 및 서비스 바로가기</button>
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
                    <img src={card1} width={250} alt="card4" />
                </Div>
                <Div>
                    <img src={card2} width={250} alt="card5" />
                </Div>
                <Div>
                    <img src={card3} width={250} alt="card6" />
                </Div>
            </Slider>
        </Div2>

        </>
    )
}

