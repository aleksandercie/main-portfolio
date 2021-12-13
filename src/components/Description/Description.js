import React from 'react';
import Container from '../../layout/Container/Container';
import Subtitle from '../Subtitle/Subtitle';
import Typography from '../../common/Typography/Typography';
import './Description.scss';

const Description = ({ description, subtitle, animate }) => (
  <Container customClass="description" animate={animate}>
    <Subtitle subtitle={subtitle} />
    {description.map((item, index) => (
      <Typography variant="p" customClass="description__item" type="description" key={index}>
        {item}
      </Typography>
    ))}
  </Container>
);

export default Description;
