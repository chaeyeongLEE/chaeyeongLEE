import React, {Component} from 'react';
import styled from "styled-components";
import TilonImg from '../Tilon.png';
import viewday from '../view_day.png';
export default function Header(){
    const Nav = styled.nav`
      display: grid;
      grid-template-rows: repeat(1,1fr);
      grid-template-columns:  repeat(2,1fr);
      width: 100%;
      height: 50px;
      position:relative;
      z-index: 10;
      background-color: rgba(0, 3, 92, 0.3);

      ul:first-child li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 5rem;
      }

      ul:last-child li {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 10rem;
        margin-top: 0.5rem;
      }

    `;

    return(
        <>
            <Nav>
                <ul>
                    <li>
                        <img src={TilonImg} alt="로고" style={{width:'112px', margin:'0.6rem'}}/>
                    </li>
                </ul>
                <ul>
                    <li>
                       <img src={viewday} alt="viewday" />
                    </li>
                </ul>
            </Nav>
        </>
    )
}