import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  .salsa-1 {
    position: absolute;
    left: 10%;
    width: 160px;
    height: 160px;
  }
  .salsa-2 {
    position: absolute;
    left: 20%;
    width: 200px;
    height: 200px;
  }
  .salsa-3 {
    position: absolute;
    left: 0%;
    width: 220px;
    height: 220px;
    filter: blur(3px);
  }
  .salsa-4 {
    position: absolute;
    left: 90%;
    width: 260px;
    height: 260px;
    filter: blur(3px);
    z-index: 5;
  }
  .salsa-5 {
    position: absolute;
    left: 70%;
    width: 160px;
    height: 160px;
  }
  .salsa-6 {
    position: absolute;
    left: 76%;
    width: 150px;
    height: 150px;
  }
`;
