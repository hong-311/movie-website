import React from 'react';
import styled from 'styled-components';
import ParaTopListContainer from '../containers/ParaTopListContainer';

const ParamountBlock = styled.div`
    padding: 200px 0 60px;
`;

//실제 2depth 서브페이지 : 파라마운트페이지컴포넌트
//자손으로 컨테이너 컴포넌트 호출
function ParamountPage() {
    return (
        <ParamountBlock>
            <ParaTopListContainer />
        </ParamountBlock>
    );
}

export default ParamountPage;