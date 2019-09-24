import React, { useContext } from 'react';

import PageContext from '~/contexts/PageContext';

import { Container, NavList, ListItem } from './styles';

export default function Nav() {
  const { page } = useContext(PageContext);

  return (
    <Container className={`color-${page}`}>
      <NavList>
        <ListItem>
          <a href="?">Baixe o app</a>
        </ListItem>
        <ListItem>
          <a href="?">Cadastre-se no Você Marche</a>
        </ListItem>
        <ListItem>
          <a href="?">Regulamento </a>
        </ListItem>
      </NavList>
    </Container>
  );
}
