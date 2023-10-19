import React from 'react';
import { BarLoader } from "react-spinners";
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    position: fixed;
    display: flex;
    z-index: 9999;
`;

const LoadingSpinner = () => {
  return (
    <LoadingWrapper>
      <BarLoader color="#ff0000" height={4} speedMultiplier={1} width={1000} />
    </LoadingWrapper>
  );
};

export default LoadingSpinner;