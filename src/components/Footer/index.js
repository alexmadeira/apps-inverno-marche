import React from 'react';

import VCM from '~/assets/imgs/vcm.png';
import appStore from '~/assets/imgs/buttons/appStore.png';
import googlePlay from '~/assets/imgs/buttons/googlePlay.png';
import facebook from '~/assets/imgs/buttons/facebook.png';
import instagram from '~/assets/imgs/buttons/instagram.png';
import logo from '~/assets/imgs/buttons/logo-footer.png';

import {
  Container,
  VCMBox,
  AppBox,
  Apps,
  AppButton,
  MarcheBox,
  SocialBox,
  SocialList,
  SocialItem,
  SocialIcone,
  LogoFooter,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <VCMBox>
        <p>Promoção exclusiva para clientes: </p>
        <img src={VCM} alt="Você Marche" />
        <AppBox>
          <p>Baixe o app, cadastre-se e participe!</p>
          <Apps>
            <a
              href="https://play.google.com/store/apps/details?id=com.ibopedtm.appvarejo.stmarche"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppButton src={googlePlay} alt="Google Play" />
            </a>
            <a
              href="https://apps.apple.com/us/app/st-marche/id1359365713?l=pt&ls=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppButton src={appStore} alt="AppStore" />
            </a>
          </Apps>
        </AppBox>
      </VCMBox>
      <MarcheBox>
        <SocialBox>
          <p>Converse com o St. Marche nas redes sociais:</p>
          <SocialList>
            <SocialItem>
              <a
                href="https://www.facebook.com/stmarcheoficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcone src={facebook} alt="facebook" />
              </a>
            </SocialItem>
            <SocialItem>
              <a
                href="https://www.instagram.com/stmarch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcone src={instagram} alt="instagram" />
              </a>
            </SocialItem>
          </SocialList>
        </SocialBox>
        <LogoFooter
          href="https://www.marche.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="St Marche" />
        </LogoFooter>
      </MarcheBox>
    </Container>
  );
}
