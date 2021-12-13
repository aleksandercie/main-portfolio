import React from 'react';
import Container from '../../layout/Container/Container';
import Button from '../../common/Button/Button';
import './Helper.scss';

const Helper = ({ handleClick }) => (
  <Container customClass="helper" onClick={handleClick}>
    <Button customClass="helper__button" variant="helper" name="Tap anywhere" />
  </Container>
);

export default Helper;
