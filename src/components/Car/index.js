import React, { useContext } from 'react';

import PageContext from '~/contexts/PageContext';

import red from '~/assets/imgs/cars/red.png';
import brown from '~/assets/imgs/cars/brown.png';
import green from '~/assets/imgs/cars/green.png';

import { Container, CarImage } from './styles';

export default function Car() {
  const { page } = useContext(PageContext);

  return (
    <Container>
      <CarImage src={red} alt="" className={page >= 0 && 'active'} />
      <CarImage src={brown} alt="" className={page >= 1 && 'active'} />
      <CarImage src={green} alt="" className={page >= 2 && 'active'} />
    </Container>
  );
}
