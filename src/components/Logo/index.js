import React, { useContext } from 'react';

import PageContext from '~/contexts/PageContext';

import red from '~/assets/imgs/logo/logo-red.png';
import brown from '~/assets/imgs/logo/logo-brown.png';
import green from '~/assets/imgs/logo/logo-green.png';

import { Container, LogoImage } from './styles';

export default function Logo() {
  const { page } = useContext(PageContext);

  return (
    <Container>
      <LogoImage src={red} alt="" className={page === 0 && 'active'} />
      <LogoImage src={brown} alt="" className={page === 1 && 'active'} />
      <LogoImage src={green} alt="" className={page === 2 && 'active'} />
    </Container>
  );
}
