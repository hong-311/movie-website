import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터관리하는 Hooks호출
import { getMovieTops } from '../modules/movietop'; //액션생성함수
//프레젠테이셔널 컴포넌트 호출
import LoadingList from '../components/common/LoadingList';
import Error from '../components/common/Error';
import MovieTopList from '../components/movie/MovieTopList';


//무비TOP20의 전체리스트 데이터를 가져오는 컨테이너 컴포넌트
function MovieTopListContainer() {
    //데이터 조회
    const {data, loading, error} = useSelector(state => state.movietops.movietops);

    //디스패치
    const dispatch = useDispatch();

    //컴포넌트가 마운트 시 데이터 가져오기
    useEffect(() => {
        dispatch(getMovieTops());
    },[dispatch]);

    //로딩중, 성공, 실패로 따로 프레젠테이셔널 컴포넌트 지정
    //!data : 데이터만 없을 수 있어서 따로 프레젠테이셔널 컴포넌트(엠프티데이터)가 있어야 함
    if(loading && !data) return <LoadingList />;
    if(error || !data) return <Error />;
    return <MovieTopList movietops={data} />;
}

export default MovieTopListContainer;