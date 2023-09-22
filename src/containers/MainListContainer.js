import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //스토어 데이터관리 Hooks
import { getMains } from '../modules/main'; //메인관련 액션생성함수 호출
import MainList from '../components/main/MainList'; //데이터성공시 컴포넌트
import Error from '../components/common/Error'; //데이터에러시 컴포넌트

//메인이미지 슬라이더의 데이터를 받아올 컨테이너컴포넌트
function MainListContainer() {
    //스토어에서 mains데이터 가져오기
    const {data, loading, error} = useSelector(state => state.mains.mains);
    const dispatch = useDispatch();

    //컴포넌트에 마운트한 후에 메인이미지 데이터 요청
    useEffect(() => {
        dispatch(getMains());
    },[dispatch]);

    if(loading && !data) return <div><img src="./img/main/main_loading.png" alt="메인페이지 로딩 중" /></div>;
    if(error || !data) return <Error />;
    return <MainList mains={data} />
}

export default MainListContainer;