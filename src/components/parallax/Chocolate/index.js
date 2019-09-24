import React from 'react';

import chocolate1 from '~/assets/imgs/sprites/chocolate/chocolate-1.png';
import chocolate2 from '~/assets/imgs/sprites/chocolate/chocolate-2.png';
import chocolate3 from '~/assets/imgs/sprites/chocolate/chocolate-3.png';
import chocolate4 from '~/assets/imgs/sprites/chocolate/chocolate-4.png';
import chocolate5 from '~/assets/imgs/sprites/chocolate/chocolate-5.png';

import ChocolateItem from '~/components/parallax/ParallaxItem';

import { Container } from './styles';

export default function Chocolate() {
  return (
    <Container>
      <ChocolateItem
        src={chocolate1}
        speed={-0.1}
        top={100}
        className="chocolate-1"
      />
      <ChocolateItem
        src={chocolate2}
        speed={-0.2}
        top={200}
        className="chocolate-2"
      />
      <ChocolateItem
        src={chocolate5}
        speed={0.2}
        top={350}
        className="chocolate-3"
      />
      <ChocolateItem
        src={chocolate3}
        speed={0.3}
        top={400}
        className="chocolate-4"
      />
      <ChocolateItem
        src={chocolate4}
        speed={-0.25}
        top={100}
        className="chocolate-5"
      />
      <ChocolateItem
        src={chocolate5}
        speed={-0.2}
        top={1}
        className="chocolate-6"
      />
    </Container>
  );
}
