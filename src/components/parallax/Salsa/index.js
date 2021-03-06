import React from 'react';

import salsa1 from '~/assets/imgs/sprites/salsa/salsa-1.png';
import salsa2 from '~/assets/imgs/sprites/salsa/salsa-2.png';
import salsa3 from '~/assets/imgs/sprites/salsa/salsa-3.png';
import salsa4 from '~/assets/imgs/sprites/salsa/salsa-4.png';
import salsa5 from '~/assets/imgs/sprites/salsa/salsa-5.png';

import SalsaItem from '~/components/parallax/ParallaxItem';

import { Container } from './styles';

export default function Salsa() {
  return (
    <Container>
      <SalsaItem src={salsa1} speed={-0.3} top={10} className="salsa-1" />
      <SalsaItem src={salsa2} speed={-0.5} top={50} className="salsa-2" />
      <SalsaItem src={salsa5} speed={-0.8} top={70} className="salsa-3" />
      <SalsaItem src={salsa3} speed={-0.75} top={40} className="salsa-4" />
      <SalsaItem src={salsa4} speed={-0.48} top={60} className="salsa-5" />
      <SalsaItem src={salsa5} speed={-0.3} top={5} className="salsa-6" />
    </Container>
  );
}
