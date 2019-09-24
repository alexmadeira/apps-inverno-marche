import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 35vh;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
`;

export const CarImage = styled.img`
  transition: all 500ms linear;
  position: absolute;
  width: 100%;
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;
