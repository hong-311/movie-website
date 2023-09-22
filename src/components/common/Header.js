import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; //페이지이동 컴포넌트 호출
import styled from 'styled-components';

//스타일컴포넌트
const HeaderBlock = styled.header`
    position: fixed; top: 0; left: 0; z-index: 5000;
    width: 100%; height: 90px; padding: 0 60px; 
    background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    display: flex; align-items: center;

    transition: background 0.3s;

    /* 스크롤시 active 상태 */
    &.active{
        background: rgba(0,0,0,0.9);
    }

    h1{ margin-right: 50px; }
    h1 img{ 
        position: relative; top: 5px;
        height: 40px; 
    }
    ul{ display: flex; }
    li{ font-size: 20px; margin-right: 40px; }
    li:first-child a::before{
        content: url("https://www.tving.com/img/icon_menu_live.svg");
        position: relative; top: 3px;
        margin-right: 10px;
    }
`;

//header컴포넌트
function Header() {
    //useRef() : 특정 돔을 선택하기 위해 사용하는 Hooks
    const header = useRef(); //header태그 요소 선택

    //페이지들이 초기실행 될때마다 스크롤 처리
    //아래 방법으로 적으면 렌더링하면서 계속 DOM을 탐색해서 React특성상 성능에 문제가 발생
    /*
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[]); 
    */

    //성능 개선을 위해서 스크롤 이벤트에 Timer를 둬서, 이벤트가 발생된 후 Timer 초기화해서 성능 지연 방지해야 함
    useEffect(()=>{
        const timer = setInterval(()=>{
            window.addEventListener('scroll',handleScroll);
        },100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll',handleScroll);
        }
    },[]); //페이지 초기실행시 이벤트 발생하기 위해 빈배열 처리

    //스크롤 이벤트 함수
    const handleScroll = () => {
        let windowTop = window.scrollY;

        if(windowTop > 50){
            //classList : 문서객체의 클래스관련을 관리하는 바닐라자바스크립트의 속성
            header.current.classList.add('active');
        }else{
            header.current.classList.remove('active');
        }
    }

    return (
        <HeaderBlock ref={header}>
            <h1><Link to="/"><img src="https://www.tving.com/img/tving-new-logo-pc.svg" alt="티빙로고" /></Link></h1>
            <ul>
                <li><Link to="/live">실시간</Link></li>
                <li><Link to="/tv">TV프로그램</Link></li>
                <li><Link to="/movie">영화</Link></li>
                <li><Link to="/paramount">파라마운트+</Link></li>
            </ul>
        </HeaderBlock>
    );
}

export default Header;