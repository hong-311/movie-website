import React from 'react';
import { useParams } from 'react-router-dom'; //파라미터 정보 받는 hooks
import ParaTopContainer from '../containers/ParaTopContainer';

//파라TOP20의 각각 페이지를 할당받을 페이지 컴포넌트 : App.js에 연결될 예정
function ParaTopPage() {
    const { id } = useParams();

    return (
        <div>
            <ParaTopContainer paraTopId={parseInt(id,10)} />
        </div>
    );
}

export default ParaTopPage;