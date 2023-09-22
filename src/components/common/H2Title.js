import React from 'react';
import styled from 'styled-components';

//스타일 컴포넌트 생성
const TitleBlock = styled.div`
    h2{
        font-size: 24px; color: #fff;
    }
`;

//타이틀만 담는 컴포넌트
function H2Title({ name }) {
    return (
        <TitleBlock>
            <h2>{name}</h2>
        </TitleBlock>
    );
}

export default H2Title;