import React, { useEffect, useCallback, useState } from 'react';

import { Container, ParallaxLayer } from './styles';

export default function ParallaxItem({ speed, top, src, className }) {
  const [parallarax, setParallarax] = useState(0);

  const handleScroll = useCallback(() => {
    const pageTop = window.scrollY;
    const newTop = top - pageTop * speed;

    setParallarax(newTop);
  }, [speed, top]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container className={className}>
      <ParallaxLayer src={src} alt="" top={parallarax} />
    </Container>
  );
}
