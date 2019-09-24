import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Section({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
