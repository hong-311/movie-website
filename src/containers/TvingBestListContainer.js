import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터관리 Hooks 호출
import { getTvingBests } from '../modules/tvingbest'; //전체데이터관련 액션생성함수 호출
import LoadingList from '../components/common/LoadingList'; //로딩페이지
import TvingBestList from '../components/main/TvingBestList'; //성공페이지
import Error from '../components/common/Error'; //에러페이지


//티빙TOP20 - 전체리스트데이터 가져오는 컨테이터컴포넌트
function TvingBestListContainer() {
    //스토어에서 데이터 조회
    const {data, loading, error} = useSelector(state => state.tvingbests.tvingbests);
    const dispatch = useDispatch();

    //컴포넌트에 마운트 후 티빙TOP20 전체데이터 요청
    useEffect(() => {
        dispatch(getTvingBests());
    },[dispatch]);

    if(loading && !data) return <LoadingList />
    if(error || !data) return <Error />
    return <TvingBestList tvingbests={data} />
}

export default TvingBestListContainer;