import React from 'react';
import MovieTopListContainer from '../containers/MovieTopListContainer';
import styled from 'styled-components';

//스타일 컴포넌트 생성
const MovieBlock = styled.div`
    padding: 200px 0 0 60px;
`;

//2depth : 영화페이지를 표시할 컴포넌트
function MoviePage() {
    return (
        <MovieBlock>
            <MovieTopListContainer />
        </MovieBlock>
    );
}

export default MoviePage;