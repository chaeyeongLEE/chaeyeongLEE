import React from 'react';
import main2Img from "../main2Img.jpg";
import styled from "styled-components";
import card1 from "../card1.png";
import card2 from "../card2.png";
import card3 from "../card3.png";
import SliderCard from "./SliderCard";
export default function Home(){

    const Div1 = styled.div`
        width: 100%;
        margin-top: -6.25rem;
    `;
    const Div2 = styled.div`
      //height: 490px;
      //margin: auto;
      //position:relative;
      //width: 120%;
      //display:grid;
      //place-items:center;
      //overflow:hidden;
      //left:-10%;
      //
      //.slide-track{
      //  display:flex;
      //  width: calc(100px * 12);
      //  animation: scroll 40s linear infinite;
      //}
      //
      //.slide-track:hover{
      //  animation-play-state:paused;
      //}
      //
      //@keyframes scroll{
      //  0% {
      //    transform: translateX(0);
      //  }
      //  100%{
      //    transform: translateX(calc(-300px * 6));
      //  }
      //}
      //
      //.slide{
      //  height: 150px;
      //  width: 300px;
      //  display: flex;
      //  align-items:center;
      //  padding: 25px;
      //  perspective:100px;
      //}
      //
      //.train-card{
      //  width:100%;
      //  transition:transform 1s;
      //  border-radius:30px;
      //  overflow:hidden;
      //}
      //
      //.train-card:hover{
      //  transform:translateZ(18px);
      //}
      //.slider::before,
      //.slider::after {
      //  background:linear-gradient(to right, #f6f4f2 0%,
      //  rgba(255,255,255,0) 100%);
      //  content:'';
      //  height:100%;
      //  position:absolute;
      //  width:15%;
      //  z-index:2;
      //}
      //
      //.slider::before{
      //  left:0;
      //  top:0;
      //}
      //
      //.slider::after{
      //  right:0;
      //  top:0;
      //  transform: rotateZ(180deg);
      //}
   `
    return (
        <>
            <Div1 className="banner">
                <img src={main2Img} alt="로고" style={{width:'100%', marginTop:'-6.25rem'}}/>
            </Div1>
            <SliderCard />
            {/*<Div2>*/}
            {/*   <div className='slide-track'>*/}
            {/*            <div className='slide'>*/}
            {/*                <div className="train-card"> <img src={card1} alt="card1" /></div>*/}
            {/*            </div>*/}
            {/*            <div className='slide'>*/}
            {/*                <div className="train-card"><img src={card2} alt="card2" /></div>*/}
            {/*            </div>*/}
            {/*            <div className='slide'>*/}
            {/*                <div className="train-card"><img src={card3} alt="card3" /></div>*/}
            {/*            </div>*/}
            {/*   </div>*/}
            {/*</Div2>*/}

        </>
    );
}