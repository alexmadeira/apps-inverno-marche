import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  &.color-0 {
    background: #d62217;
  }
  &.color-1 {
    background: #654242;
  }
  &.color-2 {
    background: #689229;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: #ffffff;
    padding: 0 10px;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
