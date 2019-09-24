import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  .chocolate-1 {
    position: absolute;
    left: 10%;
    width: 160px;
    height: 160px;
    img {
      animation: ${rotate} 310s linear infinite;
    }
  }
  .chocolate-2 {
    position: absolute;
    left: 20%;
    width: 200px;
    height: 200px;
    img {
      animation: ${rotate} 300s linear infinite;
    }
  }
  .chocolate-3 {
    position: absolute;
    left: 0%;
    width: 220px;
    height: 220px;
    filter: blur(3px);
    img {
      animation: ${rotate} 200s linear infinite;
    }
  }
  .chocolate-4 {
    position: absolute;
    left: 90%;
    width: 260px;
    height: 260px;
    filter: blur(3px);
    z-index: 5;
    img {
      animation: ${rotate} 250s linear infinite;
    }
  }
  .chocolate-5 {
    position: absolute;
    left: 70%;
    width: 160px;
    height: 160px;
    img {
      animation: ${rotate} 240s linear infinite;
    }
  }
  .chocolate-6 {
    position: absolute;
    left: 76%;
    width: 150px;
    height: 150px;
    img {
      animation: ${rotate} 220s linear infinite;
    }
  }
`;
