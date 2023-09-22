import React from 'react';
import { Routes, Route } from 'react-router-dom';
//자손컴포넌트 호출
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainPage from './pages/MainPage';
import TvingBestPage from './pages/TvingBestPage';
import ParamountPage from './pages/ParamountPage';
import ParaTopPage from './pages/ParaTopPage';
import MoviePage from './pages/MoviePage';
import MovieTopPage from './pages/MovieTopPage';
import LivePage from './pages/LivePage';
import TvPage from './pages/TvPage';
import TvProgramNewPage from './pages/TvProgramNewPage';

//스타일지정 - 공통 CSS작성 - createGlobalStyle컴포넌트 사용
import styled, { createGlobalStyle } from 'styled-components';

//스타일컴포넌트는 첫글자가 대문자
const GlobalStyle = createGlobalStyle`
  *{ padding: 0;  margin: 0; color: #fff; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; }
  body { background: #000; }
  li{ list-style: none; }
  a{ text-decoration: none; }
`;

const BodyBlock = styled.div`
  width: 100%; overflow: hidden;
`;


function App() {
  return (
    <BodyBlock>
      <GlobalStyle />
      {/* 페이지 이동이 없을 header지정 */}
      <Header />
      <Routes>
        {/* 페이지 이동이 것은 이쪽에 처리 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/paramount" element={<ParamountPage />} />
        <Route path="/tvingbest/:id" element={<TvingBestPage />} />
        <Route path="/paratop/:id" element={<ParaTopPage />} />
        <Route path="/movietop/:id" element={<MovieTopPage />} />
        <Route path="/tvprogramnew/:id" element={<TvProgramNewPage />} />
      </Routes>
      {/* 페이지 이동이 없을 footer지정 */}
      <Footer />
    </BodyBlock>
  );
}

export default App;