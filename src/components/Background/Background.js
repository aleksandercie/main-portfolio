import React from 'react';
import Container from '../../layout/Container/Container';
import Image from '../../common/Image/Image';
import './Background.scss';

const Background = ({ image }) => (
  <Container customClass="background">
    <Image image={image} alt="background" customClass="background__image" />
  </Container>
);

export default Background;
