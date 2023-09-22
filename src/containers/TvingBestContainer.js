import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터 조회관련 Hooks호출
import { getTvingBest } from '../modules/tvingbest'; //각각페이지 액션생성함수 호출
import TvingBest from '../components/main/TvingBest'; //성공 페이지 호출
import Error from '../components/common/Error'; //에러 페이지 호출

//티빙TOP20 각각페이지 데이터를 받는 컨테이너 컴포넌트
function TvingBestContainer({ tvingId }) { //부모로부터 각각 아이디를 받아와야 각각 페이지 생성
    //각각 데이터를 스토어로부터 받아오기
    const {data, loading, error} = useSelector(
        state => state.tvingbests.tvingbest[tvingId]
    ) || {
        loading: false,
        data: null,
        error: null
    };

    const dispatch = useDispatch();

    //컴포넌트 마운트 시에 데이터 받기
    useEffect(() => {
        if(data) return;
        dispatch(getTvingBest(tvingId));
    },[tvingId, data, dispatch]);

    //로딩중, 성공, 에러 컴포넌트를 각각 반환
    if(loading) return <div>로딩중...(리액트로딩바 처리하는 것이 좋음)</div>;
    if(error || !data) return <Error />;
    return <TvingBest tvingbest={data} />
}

export default TvingBestContainer;