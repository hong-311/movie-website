import React from 'react';
import styled from 'styled-components';
import LiveSeriesContainer from '../containers/LiveSeriesContainer';

const LiveBlock = styled.div`
    padding: 120px 60px 0;
`;

function LivePage() {
    return (
        <LiveBlock>
            <LiveSeriesContainer />
        </LiveBlock>
    );
}

export default LivePage;