import React, {Component} from 'react';
import styled from "styled-components";
import TilonImg from '../Tilon.png'
export default function Header(){
    const Nav = styled.nav`
      display: grid;
      height: 50px;
      position:relative;
      z-index: 10;
      justify-self: stretch;
      justify-content: space-between;
      background-color: rgba(0, 3, 92, 0.3);
      /* 첫 번째 li 요소에 스타일 적용 */
      ul li:nth-child(1) {
        width: 6rem;
      }
    `;

    return(
        <>
            <Nav>
                <ul>
                    <li>
                        <img src={TilonImg} alt="로고" style={{width:'6rem', margin:'0.6rem'}}/>
                    </li>
                    {/*<li>*/}
                    {/*    <button type="button" style={{width:'100px', margin:'20px 30px'}}>category</button>*/}
                    {/*</li>*/}
                </ul>
            </Nav>
        </>
    )
}