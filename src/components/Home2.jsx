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
import call from "../call.png";
import smile from "../smile.png";
import email from "../email.png";
import letter1 from "../letter1.png";
import letter2 from "../letter2.png";
import letter3 from "../letter3.png";
import letter4 from "../letter4.png";
import dstMonitor from "../dstMonitor.png";
import black from "../blackback.png";
import black3 from "../blackback3.png";
import Laptop from "../Laptop.png";

import * as url from "url";

export default function Home(){
    const Div0 = styled.div`
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-auto-rows: minmax(100px, auto);
      position: relative;
    `;

    //대문 배너
    const Div1 = styled.div`
      display: grid;
      grid-column: 1 / 4;
      grid-row: 1;
      margin-top: -6.25rem;
      position: relative;
    `;

    //슬라이더묶음
    const Div2=styled.div`
      grid-column: 1/4;
      grid-row: 2;
      position: relative;

    `;
    // 제품소개해드릴게요
    const Div3 = styled.div`
      display: grid;
      grid-column: 3;
      grid-row: 3 ;
      margin-top: 7rem;
      margin-left: -50px;
    `;
    const Div4=styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr; // 2번 열부터 4번 열까지
      grid-row: 3; 
      grid-column: 2;
      margin-left: 80px;
      position: relative;
    `;
    const Div5=styled.div`
      display: grid;
      grid-row: 4;
      grid-column: 2; //카드뉴스가 위치하는 자리
      grid-gap: 3rem;
      position: relative;
      margin-left: 30px;
      margin-top: 50px;
      img {
        width: 250px; /* 이미지의 너비 설정 */
        height: auto;
      }
    `;
    const Div6 = styled.div`
      display: grid;
      position: relative;
      background-color: #F8F8F8;
      grid-row: 5;
      grid-column:1/4;
      height: 970px;
      //grid-column: 2;
      margin-top: 50px;
      padding-top: 100px;
      justify-content: center;
      place-items: center;
      z-index: 1; // z-index 속성 추가
    `
    const Div7 = styled.div`
      display: grid;
      position: relative;
      grid-row: 6;
      grid-column:1/4;
      background-color: black;
      //height: 970px;
      justify-content: center;
      place-items: center;
      padding-top: 300px;
      color: white;
      background-image: url('/src/Laptop.png');
      background-position: calc(50% + 22vw) 0;
      background-size: calc(300px + 40vw) auto;
    `;
    //상담이 가능해요. FAQ
    const Section2 = styled.section`
      display: grid;
      grid-row: 3/5 span2;
      grid-column: 3 span1;
      grid-template-rows: repeat(auto-fill, 1fr 2fr);
      grid-template-columns: repeat(1, 1fr 2fr);
      margin-top: 125px;
      width: 300px;
      height: 200px;
      grid-gap: 13%;
      margin-left: 37px;

      p {
        width: 250px;
        grid-column: 2/3;
      }

      //p:nth-child(1) {
      //  grid-row: 1;
      //  font-weight: 800;
      //  margin-bottom: 15px;
      //}
      
    `;

    //아이콘 리스트
    const Section3 = styled.section`
      display: grid;
      grid-column: 3/4;
      grid-row: 4;
      height: 210px;
      margin-left: -3rem;
      justify-items: stretch;
      display: flex;
      align-items: center;

      div {
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        row-gap: 15%;
        width: 98px;
      }

      .name {
        margin-top: 30px; /* 이름과 이미지 사이의 간격을 조절 */
      }
    `;
    const Section4 = styled.section`
      display: grid;
      grid-template-rows: repeat(auto-fill, 1fr);
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      align-items: center;
      .newsheader1 {
        grid-column: 1/2;
        grid-row: 1;
        margin-bottom: 20px;
      }

      .newsimg1 {
        grid-column: 1/2;
        grid-row: 2;
        grid-column-gap: 1.2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .newsheader2 {
        grid-column: 1/2;
        grid-row: 3;
        margin-top: 60px;
        margin-bottom: 20px;
      }
      .newsimg2 {
        grid-column: 1/2;
        grid-row: 4;
        grid-column-gap: 1.2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .newsheader3 {
        grid-column: 1/2;
        grid-row: 5;
        margin-top: 60px;
        margin-bottom: 20px;
      }
      .newsimg3 {
        grid-column: 1/2;
        grid-row: 6;
        grid-column-gap: 1.2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .newsheader4 {
        grid-column: 1/2;
        grid-row: 7;
        margin-top: 60px;
        margin-bottom: 20px;
      }
      .newsimg4 {
        grid-column: 1/2;
        grid-row: 8;
        grid-column-gap: 1.2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    };
    
    //`;

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
            <div style={{marginRight:'32px', marginTop:'15px', fontWeight:'600', fontSize:'small'}}>{el.name}</div>
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
                    <p style={{ fontSize: 'xx-large', color:'#6e6e6e' }}>
                        <span style={{ fontWeight: '800', color:'black' }}>틸론</span>의 다양한 제품을 <br /> 소개해드릴게요
                    </p>
                </Div3>
                <Section2 className="message2">
                    <img src={call} alt="상담" style={{gridRow:'1/3', gridColumn:'1/2'}} />
                    <p style={{fontWeight:'700'}}> 1:1상담이 가능해요. 언제든 물어보세요</p> <p style={{color:'#0066CC', marginTop:'-10px'}}> 1:1 온라인 문의 무엇이든 물어보세요 </p>
                    <img src={smile} alt="상담" style={{gridRow:'3/5', gridColumn:'1/2'}}/>
                    <p style={{fontWeight:'700'}}> 모든 질문에 친절히 답해드립니다 </p> <p style={{color:'#0066CC', marginTop:'-10px'}}> FAQ </p>
                    <img src={email} alt="상담" style={{gridRow:'5/7', gridColumn:'1/2'}}/>
                    <p style={{fontWeight:'700'}}> 틸론과 함께 여러분의 꿈을 실현하세요!</p> <p style={{color:'#0066CC', marginTop:'-10px'}}> Apply </p>
                </Section2>
                <Section3 className="items">
                    {iconList}
                </Section3>
            </Div4>
            <Div5>
                <Section4>
                    <div className="newsheader1">
                        <p style={{color:'#6e6e6e' }}>
                            <span style={{ fontWeight: '800', color:'black' }}>틸론 뉴스 . </span> 따끈따끈한 다양한 이야기.
                        </p>
                    </div>
                    <div className="newsimg1">
                        <img src={letter1} alt="로고" />
                        <img src={letter2} alt="로고" />
                        <img src={letter3} alt="로고" />
                        <img src={letter4} alt="로고" />
                    </div>
                    
                    <div className="newsheader2">
                        <p style={{color:'#6e6e6e' }}>
                            <span style={{ fontWeight: '800', color:'black' }}>인사이트 . </span> 따끈따끈한 다양한 이야기.
                        </p>
                    </div>
                    <div className="newsimg2">
                        <img src={letter1} alt="로고" />
                        <img src={letter2} alt="로고" />
                        <img src={letter3} alt="로고" />
                        <img src={letter4} alt="로고" />
                    </div>

                    <div className="newsheader3">
                        <p style={{color:'#6e6e6e' }}>
                            <span style={{ fontWeight: '800', color:'black' }}>행사 . </span> 따끈따끈한 다양한 이야기.
                        </p>
                    </div>
                    <div className="newsimg3">
                        <img src={letter1} alt="로고" />
                        <img src={letter2} alt="로고" />
                        <img src={letter3} alt="로고" />
                        <img src={letter4} alt="로고" />
                    </div>

                    <div className="newsheader4">
                        <p style={{color:'#6e6e6e' }}>
                            <span style={{ fontWeight: '800', color:'black' }}>뉴스레터 . </span> 따끈따끈한 다양한 이야기.
                        </p>
                    </div>
                    <div className="newsimg4">
                        <img src={letter1} alt="로고" />
                        <img src={letter2} alt="로고" />
                        <img src={letter3} alt="로고" />
                        <img src={letter4} alt="로고" />
                    </div>
                </Section4>
            </Div5>
            <Div6>
                <div className="Intro">
                    <h3 style={{fontWeight:'800',fontSize:'1.5rem', marginBottom:'0.75rem', marginLeft:'10rem'}}>TILON.</h3>
                    <h1 style={{color:'#F56900', fontWeight:'600', fontSize:'2.3rem'}}>SOLUTION & PRODUCT</h1>
                    <br />
                    <br />
                    <br />
                    <p style={{fontWeight:'800',fontSize:'1.8rem', marginLeft:'6.875rem', marginBottom:'0.4rem'}}>틸론의 다양하고 </p>
                    <p style={{fontWeight:'800',fontSize:'1.8rem', marginLeft:'2.2rem', marginBottom:'0.4rem'}}>혁신적인 제품들과 솔루션을</p>
                    <p style={{fontWeight:'800',fontSize:'1.8rem', marginLeft:'8.3rem'}}>소개합니다.</p>
                </div>

                <div className="DstIntro" style={{marginTop:'150px'}}>
                    <p style={{fontWeight:'800',fontSize:'1.5rem', marginBottom:'1.2rem',marginLeft:'12rem' }}>Dstation.</p>
                    <p style={{fontSize:'1rem', marginBottom:'0.75rem' }}> 오지를 탐험할 때는 튼튼한 신발만큼 디자인된 '나침반'앱에 탑재된<br />
                    튼튼한 신발만큼 디자인된 '나침반'앱에 탑재된 튼튼한 신발만큼 <br />
                    튼튼한 신발만큼 디자인된 '나침반'앱에 탑재된
                    </p>
                    <button type="button" style={{border:'none', backgroundColor:'#F8F8F8', color:'#2997FF', marginLeft:'11.5rem', fontWeight:'700'}}> Dstation 바로가기  > </button>
                </div>

                <div className="DstImg" style={{ marginTop: '-60px', position: 'relative' }}>
                    <img src={dstMonitor} alt="Dstation Monitor" style={{ width: '70%', height: 'auto', marginLeft: '280px', zIndex: '10', position: 'relative'}} />
                    <img src={black3} alt="black backgroundimg" style={{ marginTop: '-1000px', zIndex: '-100', position: 'relative', paddingBottom:'100px', width:'100%', height:'200px'}} />
                    <img src={black3} alt="black backgroundimg" style={{ marginTop: '-1000px', zIndex: '-100', position: 'relative', paddingBottom:'120px', width:'100%', height:'200px'}} />
                </div>
            </Div6>
            <Div7>
                Elcloud
            </Div7>
        </Div0>
    );
}