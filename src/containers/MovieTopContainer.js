import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터를 관리할 Hooks호출
import { getMovieTop } from '../modules/movietop'; //각각 데이터 관련 액션생성함수 호출
import Error from '../components/common/Error';
import MovieTop from '../components/movie/MovieTop';
import LoadingSpinner from '../components/common/LoadingSpinner';

//무비TOP20의 각각 페이지 데이터를 스토어로부터 받아오는 컨테이너 컴포넌트
function MovieTopContainer({ movieTopId }) {
    //데이터 조회
    const { data, loading, error } = useSelector(
        state => state.movietops.movietop[movieTopId]
    ) || {
        loading: false,
        data: null,
        error: null
    }

    //디스패치처리
    const dispatch = useDispatch();

    //컴포넌트 마운트시 데이터 불러오기
    useEffect(() => {
        if(data) return; //데이터가 이미 있으면 다시 로딩하지 말것
        dispatch(getMovieTop(movieTopId));
    },[data, dispatch, movieTopId]);

    //로딩중, 성공, 에러관련 프레젠테이셔널 컴포넌트 호출
    if(loading && !data) return <LoadingSpinner />;
    if(error || !data) return <Error />;
    return <MovieTop movietop={data} />
}

export default MovieTopContainer;