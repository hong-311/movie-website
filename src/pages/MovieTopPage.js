import React from 'react';
import { useParams } from 'react-router-dom'; //주소 파라미터 정보를 받는 Hooks
import MovieTopContainer from '../containers/MovieTopContainer';

//무비TOP20의 각각 데이터 페이지 컴포넌트
//이걸 만들어야 파라미터 정보를 줄수 있음
function MovieTopPage() {
    const { id } = useParams(); //파라미터 중 id값을 담는 비구조화할당 처리

    //각각페이지 컨테이너 컴포넌트에 id값 내려줌
    return (
        <div>
            <MovieTopContainer movieTopId={parseInt(id,10)} />
        </div>
    );
}

export default MovieTopPage;