import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터관리관련 Hooks호출
import { getParaTops } from '../modules/paratop'; //전체데이터관련 액션생성함수 호출
import ParaTopList from '../components/paramount/ParaTopList';
import Error from '../components/common/Error';
import LodingList from '../components/common/LoadingList';

//파라TOP20의 전체데이터를 스토어로부터 가져올 컨테이너 컴포넌트
function ParaTopListContainer() {
    //데이터 조회
    const { data, loading, error } = useSelector(state => state.paratops.paratops);

    //디스패치처리
    const dispatch = useDispatch();

    //컴포넌트에 마운트 후에 데이터처리
    useEffect(() => {
        dispatch(getParaTops());
    },[dispatch]);

    //로딩중, 성공, 에러관련 프레젠테이셔널 컴포넌트를 각각 호출
    if(loading && !data) return <LodingList />;
    if(error || !data) return <Error />;
    return <ParaTopList paratops={data} />
}

export default ParaTopListContainer;