import React, { useContext } from 'react';

import { Container, Title } from './styles';

export default function Section({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
