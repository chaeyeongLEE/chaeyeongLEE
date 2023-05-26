import React, {Component} from 'react';

import styled from "styled-components";
import TilonImg2 from '../logo2.png';
import youtube from '../youtube.png';
import blog from '../blog.png';
import open from '../opennew.png';
import {Link} from "react-router-dom";
export default function Footers(){
    const Footer = styled.div`
      display: grid;
      grid-template-columns: repeat(1, 0.5fr 2.3fr 1fr);
      grid-template-rows: repeat(1, 2fr 1fr);
      background-color: black;
      color: #737373;
      row-gap: 30px;
      position: relative;
      `;

    const Section1 = styled.section`
        grid-row: 1;
        grid-column: 2/3;
        line-height: 1.563rem;
        margin-top: 4rem;
        justify-content: space-between;
        display: flex;
        padding-right: 4rem;
        
        ul li:nth-child(1) {
          color: white;
          font-weight: 700;
          font-size: large;
          margin-bottom: 1.2rem;
        }
        `;

    const Section2 = styled.section`
        grid-row: 2;
        grid-column: 1/4;
        border-top: 1px solid #3A3A3C;
        padding-left: 15.625rem;
        
        ul li:nth-child(1) {
          margin-top: 3rem;
        }

        ul li:nth-child(2) {
          margin-top: 1.5rem;
          line-height: 1.375rem;
        }
    `;

    const Section3 = styled.section`
        grid-row: 1;
        grid-column: 3/4;
        margin-top: 4rem;
        padding-left: 4rem;
        border-left: 1px solid #3A3A3C;
        position: relative;
        z-index: 3;
      
        ul li:nth-child(2) {
          margin-top: 1.5rem;
          position: relative;
          display: inline-block;
        }
    
        .dropbtn {
          background-color: transparent;
          border-color: white;
          border-radius: 0.313rem;
          width: 200px;
          text-align: left;
          color: white;
          padding: 0.75rem;
          font-size: 1rem;
          cursor: pointer;
        }
    
        .drop-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          border-radius: 0.3rem;
          min-width: 200px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
        .dropdown:hover .drop-content {
          display: block;
        }
    
        .drop-content a {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: #333;
        }
    
        .drop-content a:hover {
          background-color: #ddd;
          border-radius: 0.3rem;
        }
    
        ul li:nth-child(2) {
          margin-top: 1.5rem;
          position: relative;
          display: inline-block;
        }
`
    const blogUrl = "https://blog.naver.com/hitilon";
    const youtubeUrl = "https://www.youtube.com/user/TilonCompany";
    return(
        <>
           <Footer>
               <Section1>
                    <ul>
                        <div className="company">
                            <li>회사정보</li>
                            <li>회사개요</li>
                            <li>CEO 인사말</li>
                            <li>연혁</li>
                            <li>인증 및 수상</li>
                            <li>윤리강령</li>
                            <li>행동강령</li>
                            <li>오시는길</li>
                            <li style={{marginTop:'1.2rem',color:'#D1D1D6'}}>이용약관</li>
                            <li style={{color:'#D1D1D6'}}>개인정보취급방침</li>
                        </div>
                    </ul>
                   <ul>
                       <div className="service">
                           <li style={{color:'#D1D1D6'}}>제품 및 서비스</li>
                           <li style={{color:'#D1D1D6', marginTop:'1.2rem'}}>가상화</li>
                           <li>Dstation</li>
                           <li>Estation</li>
                           <li style={{color:'#D1D1D6', marginTop:'1.2rem'}}>클라우드</li>
                           <li>elcloud</li>
                           <li>CenterFace</li>
                           <li style={{color:'#D1D1D6', marginTop:'1.2rem'}}>메타버스</li>
                           <li>CenterVerse</li>
                           <li style={{marginTop:'1.2rem',color:'#D1D1D6'}}>블록체인</li>
                           <li>Mstation</li>
                           <li>CenterChain</li>
                       </div>
                   </ul>
                   <ul>
                       <div className="business">
                           <li style={{color:'#D1D1D6'}}>비즈니스</li>
                           <li style={{color:'#D1D1D6', marginTop:'1.2rem'}}>구축사례</li>
                           <li>공공/국방</li>
                           <li>금융/기업</li>
                           <li>의료/교육</li>
                           <li style={{color:'#D1D1D6', marginTop:'1.2rem'}}>파트너사</li>
                           <li>TBA 파트너 프로그램</li>
                           <li>TBA 파트너사</li>
                           <li>TBA 협력사</li>
                           <li style={{color:'#A1FFC7', marginTop:'1.2rem'}}>도입문의</li>
                       </div>
                   </ul>
                   <ul>
                       <div className="news">
                           <li>뉴스</li>
                           <li>보도자료</li>
                           <li>Insight</li>
                           <li>뉴스레터</li>
                           <li>행사</li>
                           <li>
                               <button onClick={()=>{window.open(blogUrl)}} style={{background:"none",border:"none", cursor:'pointer', color:'white'}}> 블로그 <img src={open} alt="openpage" /></button>
                           </li>
                           <li>유튜브<img src={open} alt="openpage" /></li>
                       </div>
                   </ul>
                   <ul>
                       <div className="hire">
                           <li>인재채용</li>
                           <li>인재상</li>
                           <li>복리후생</li>
                           <li>입사지원</li>
                       </div>
                   </ul>
               </Section1>

                <Section2>
                    <ul>
                        <li>
                            <img src={TilonImg2} alt="로고" />
                        </li>
                        <li>
                            주식회사 틸론 | 대표 최백준 | 대표전화 02-2627-9000 | FAX 02-2627-9099 | 사업자번호 119-81-49757 <br />
                            서울 법인 (07789) 서울시 강서구 마곡중앙14로 22 <br />
                            제주 법인 (63309) 제주특별자치도 제주시 첨단로 213-3  <br />
                            Copyright ⓒ TILON Co., Ltd. All Rights Reserved.
                        </li>
                    </ul>
                </Section2>

               <Section3>
                   <ul>
                       <li>
                           <button onClick={()=>{window.open(blogUrl)}} style={{background:"none",border:"none", cursor:'pointer'}}> <img src={blog} alt="로고" /> </button>
                           <button onClick={()=>{window.open(youtubeUrl)}} style={{background:"none",border:"none", cursor:'pointer'}}><img src={youtube} alt="로고" style={{marginRight:'1rem'}} /></button>
                       </li>

                       <li className="dropdown">
                           <button className="dropbtn"> 패밀리 사이트　　　　 ▽ </button>
                           <div className="drop-content">
                               <Link to="https://www.elcloud.com/"> elcloud </Link>
                               <Link to="https://www.kdaas.com/"> KDaaS </Link>
                               <Link to="http://tilonsoft.com/"> Tilon Soft </Link>
                               <Link to="https://www.centerface.co.kr/main"> CenterFace </Link>
                           </div>
                       </li>
                   </ul>
               </Section3>

           </Footer>

        </>
    )
}