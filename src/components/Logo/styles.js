import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 0;
  left: 50%;
  top: 80px;
  transform: translate(-50%, -50%);
`;

export const LogoImage = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: all 500ms linear;
  &.active {
    opacity: 1;
  }
`;
