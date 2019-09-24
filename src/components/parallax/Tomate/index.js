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
      <Tomato src={tomate1} speed={-0.1} top={100} className="tomato-1" />
      <Tomato src={tomate2} speed={-0.2} top={200} className="tomato-2" />
      <Tomato src={tomate5} speed={-0.2} top={350} className="tomato-3" />
      <Tomato src={tomate3} speed={-0.3} top={300} className="tomato-4" />
      <Tomato src={tomate4} speed={-0.45} top={230} className="tomato-5" />
      <Tomato src={tomate5} speed={-0.2} top={50} className="tomato-6" />
    </Container>
  );
}
