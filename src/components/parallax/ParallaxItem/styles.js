import styled from 'styled-components';

export const Container = styled.div``;

export const ParallaxLayer = styled.img`
  width: 100%;
  height: 100%;
  transition: all 500ms linear;
  position: absolute;
  transform: translate(
    0,
    ${props => (props.top ? `${props.top}px` : '-200px')}
  );
`;
