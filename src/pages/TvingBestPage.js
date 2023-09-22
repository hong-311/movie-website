import React from 'react';
//App.js에서 Route를 통해 url을 받아서 파라미터 생성
import { useParams } from 'react-router-dom';
import TvingBestContainer from '../containers/TvingBestContainer';

//티빙TOP20의 각각 페이지를 표시할 페이지 컴포넌트
function TvingBestPage() {
    const { id } = useParams(); //파라미터 정보를 문자열로 반환받음

    return (
        <>
            <TvingBestContainer tvingId={parseInt(id,10)} />
        </>
    );
}

export default TvingBestPage;