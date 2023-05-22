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
export default function Home(props){

    const Div1 = styled.div`
        width: 100%;
        margin-top: -6.25rem;
    `;
    const Div2 = styled.div`
      display: block;
    `
    const Div3 = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    `;

    const Div4 = styled.div`
        grid-column: 1;
        grid-row: 1;
    `
    const Div6 = styled.div`
        grid-column: 1/3;
        grid-row: 2/4;
        justify-content: stretch;
    `

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
        <>
            <Div1 className="banner">
                <img src={main2Img} alt="로고" style={{width:'100%', marginTop:'-6.25rem'}}/>
            </Div1>
            <Div2>
            <SliderCard />
            </Div2>
            <Div3 className="introduce">
                    <Div4 className="message1">
                        <p>틸론의 다양한 제품을 소개해드릴게요.~~</p>
                    </Div4>
                    <div className="message2">
                        <p> 1:1상담이 가능해요. 언제든 물어보세요 <br /> 1:1 온라인 문의 무엇이든 물어보세요</p>
                        <p> 모든 질문에 친절히 답해드립니다 <br /> FAQ </p>
                        <p> 틸론과 함께 여러분의 꿈을 실현하세요! <br /> Apply </p>
                    </div>
                    <Div6 className="items">
                        {iconList}
                    </Div6>
            </Div3>
        </>
    );
}