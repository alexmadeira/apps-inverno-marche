import React, { useState } from 'react';
import { FullPage, Slide } from 'react-full-page';

import { PageProvider } from '~/contexts/PageContext';

import Nav from '~/components/Nav';
import Logo from '~/components/Logo';
import Car from '~/components/Car';
import Section from '~/components/Section';

import Tomate from '~/components/parallax/Tomate';
import Chocolate from '~/components/parallax/Chocolate';
import Salsa from '~/components/parallax/Salsa';

// import { Slide } from './styles';

export default function Page() {
  const [page, setPage] = useState(0);

  return (
    <PageProvider value={{ page, setPage }} scrollMode="normal">
      <Nav />
      <Logo />
      <Car />

      <FullPage afterChange={({ to }) => setPage(to)}>
        <Slide>
          <Tomate />
          <Section title="A cada R$ 100* em compras no St. Marche, ganhe 1 cupom e concorra a 3 MINI Countryman." />
        </Slide>
        <Slide>
          <Chocolate />
          <Section title="Já é cliente Você Marche? Cadastre-se através do app ou no nosso site." />
        </Slide>
        <Slide>
          <Salsa />
          <Section title="Agora é só descobrir o St. Marche mais próximo e garantir seu cupom!" />
        </Slide>
      </FullPage>
    </PageProvider>
  );
}
