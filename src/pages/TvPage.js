import React from 'react';
import styled from 'styled-components';
import TvProgramNewListContainer from '../containers/TvProgramNewListContainer';

const TvBlock = styled.div`
    padding: 200px 0 0 60px;
`;

function TvPage(props) {
    return (
        <TvBlock>
            <TvProgramNewListContainer />
        </TvBlock>
    );
}

export default TvPage;