import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VCMBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
  }
  & > img {
    width: 120px;
    margin: 10px 0;
  }
`;

export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  p {
    font-size: 10px;
  }
`;

export const Apps = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  a {
    margin: 10px 5px;
  }
`;

export const AppButton = styled.img`
  height: 20px;
  width: initial;
`;

export const MarcheBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 10px 20px;
`;

export const SocialBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  p {
    font-size: 10px;
    color: #979797;
    max-width: 160px;
    text-align: right;
  }
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`;

export const SocialItem = styled.li`
  margin: 5px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const SocialIcone = styled.img`
  width: 100%;
`;

export const LogoFooter = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  img {
    display: flex;
    width: 100%;
  }
`;
