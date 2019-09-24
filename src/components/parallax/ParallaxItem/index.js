import React, { useEffect, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import PageContext from '~/contexts/PageContext';

import { Container, ParallaxLayer } from './styles';

function ParallaxItem({ speed, top, src, className }) {
  const [parallarax, setParallarax] = useState(0);
  const { page } = useContext(PageContext);

  const handleScroll = useCallback(() => {
    const pageTop = window.scrollY / (page + 1);
    const persentTop = window.screen.availHeight * (top / 50);
    const newTop =
      ((persentTop - pageTop * speed) / window.screen.availHeight) * 100;

    setParallarax(newTop);
  }, [page, speed, top]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const animate = {
    transform: `translate(0,${parallarax}%)`,
  };

  return (
    <Container className={className} style={animate}>
      <ParallaxLayer src={src} alt="" />
    </Container>
  );
}

ParallaxItem.defaultProps = { className: '', top: 0 };

ParallaxItem.propTypes = {
  speed: PropTypes.number.isRequired,
  top: PropTypes.number,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ParallaxItem;
