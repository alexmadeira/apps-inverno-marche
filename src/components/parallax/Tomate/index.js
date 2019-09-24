import React from 'react';

import tomate1 from '~/assets/imgs/sprites/tomate/tomate-1.png';
import tomate2 from '~/assets/imgs/sprites/tomate/tomate-2.png';
import tomate3 from '~/assets/imgs/sprites/tomate/tomate-3.png';
import tomate4 from '~/assets/imgs/sprites/tomate/tomate-4.png';
import tomate5 from '~/assets/imgs/sprites/tomate/tomate-5.png';

import Tomato from '~/components/parallax/ParallaxItem';

import { Container } from './styles';

export default function Tomate() {
  return (
    <Container>
      <Tomato src={tomate1} speed={-0.1} top={10} className="tomato-1" />
      <Tomato src={tomate2} speed={-0.7} top={40} className="tomato-2" />
      <Tomato src={tomate5} speed={-0.9} top={75} className="tomato-3" />
      <Tomato src={tomate3} speed={-0.6} top={60} className="tomato-4" />
      <Tomato src={tomate4} speed={-1} top={70} className="tomato-5" />
      <Tomato src={tomate5} speed={-0.4} top={20} className="tomato-6" />
    </Container>
  );
}
