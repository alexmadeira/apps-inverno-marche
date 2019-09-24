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

  .tomato-1 {
    position: absolute;
    left: 10%;
    width: 160px;
    height: 160px;
    img {
      animation: ${rotate} 200s linear infinite;
    }
  }
  .tomato-2 {
    position: absolute;
    left: 20%;
    width: 200px;
    height: 200px;
    img {
      animation: ${rotate} 250s linear infinite;
    }
  }
  .tomato-3 {
    position: absolute;
    left: 0%;
    width: 220px;
    height: 220px;
    filter: blur(3px);
    img {
      animation: ${rotate} 270s linear infinite;
    }
  }
  .tomato-4 {
    position: absolute;
    left: 90%;
    width: 260px;
    height: 260px;
    filter: blur(3px);
    z-index: 5;
    img {
      animation: ${rotate} 210s linear infinite;
    }
  }
  .tomato-5 {
    position: absolute;
    left: 70%;
    width: 160px;
    height: 160px;

    img {
      animation: ${rotate} 300s linear infinite;
      transform: rotate(98deg);
    }
  }
  .tomato-6 {
    img {
      animation: ${rotate} 280s linear infinite;
    }
    position: absolute;
    left: 76%;
    width: 150px;
    height: 150px;
  }
`;
