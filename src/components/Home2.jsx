import React from 'react';
import main2Img from "../main2Img.jpg";
import styled from "styled-components";

import SliderCard from "./SliderCard";
import DstImg from "../dstation.png";
import EstImg from "../Estation.png";
import IstImg from "../iStation.png";
import VstImg from "../Vstation.png";
import CCImg from "../CenterChain.png";
import CFImg from "../CenterFace.png";
import ElImg from "../elcloud.png";
import CVImg from "../centerverse.png";
export default function Home(){
    const Div0 = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(100px, auto);
    `;

    //대문 배너
    const Div1 = styled.div`
      display: grid;
      grid-column: 1/4;
      grid-row: 1;
      margin-top: -6.25rem;
    `;

    //슬라이더묶음
    const Div2=styled.div`
      grid-column: 1/4;
      grid-row: 2;
    `;

    // 제품소개해드릴게요
    const Div3 = styled.div`
        display: grid;
        grid-column: 3/4;
        grid-row: 3;
        margin-left: 100px;
    `;
    const Div4=styled.div`
        display: grid;
        grid-column: 1 / 3; // 2번 열부터 4번 열까지
        grid-row: 4; // 4번 행에
    `;
    const Section2 = styled.section`
      display: grid;
      color: cornflowerblue;
      grid-row: 5;
      grid-column: 5;
    `;
    const Section3 = styled.section`
      display: grid;
      color: brown;
      grid-column: 3/4;
      grid-row: 4;
      margin-top: 50px;
      margin-left: 100px;
     // grid-area: 4/3;
      justify-items: stretch;
      display: flex;
      align-items: center; 
      div {
        display: flex; /* 내부 요소들도 가로 정렬하기 위해 flex를 사용 */
        align-items: center; /* 내부 요소들을 수직 가운데 정렬 */
        margin-right: 20px; /* 요소들 사이의 간격을 조절 */
      }
    `;

    //아이콘 목록
    const icons = [
        {
            id: 1,
            name:'Dstation',
            image: DstImg
        },
        {
            id: 2,
            name:'Estation',
            image: EstImg
        },
        {
            id: 3,
            name:'Istation',
            image: IstImg
        },
        {
            id: 4,
            name:'Vstation',
            image: VstImg
        },
        {
            id: 5,
            name:'CenterChain',
            image: CCImg
        },
        {
            id: 6,
            name:'CenterFace',
            image: CFImg
        },
        {
            id: 7,
            name:'elcloud',
            image: ElImg
        },
        {
            id: 8,
            name:'CenterVerse',
            image: CVImg
        },
    ]
    const iconList = icons.map((el) => (
        <div key={el.id}>
            <img src={el.image} alt={el.name} />
            <div>{el.name}</div>
        </div>
    ));

    return (
        <Div0 className="container">
            <Div1 className="banner">
                <img src={main2Img} alt="로고" style={{width:'100%', marginTop:'-6.25rem', height:'850px'}}/>
            </Div1>
            <Div2>
                <SliderCard />
            </Div2>
            <Div4 className="introduce">
                <Div3 className="message1">
                    <p style={{fontSize:'xx-large'}}><h5 style={{fontWeight:'800'}}> 틸론 </h5> 의 다양한 제품을 <br /> 소개해드릴게요 </p>
                </Div3>
                <Section2 className="message2">
                    <p> 1:1상담이 가능해요. 언제든 물어보세요 <br /> 1:1 온라인 문의 무엇이든 물어보세요</p>
                    <p> 모든 질문에 친절히 답해드립니다 <br /> FAQ </p>
                    <p> 틸론과 함께 여러분의 꿈을 실현하세요! <br /> Apply </p>
                </Section2>
                <Section3 className="items">
                    {iconList}
                </Section3>
            </Div4>
        </Div0>
    );
}