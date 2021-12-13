import React from 'react';
import classNames from 'classnames';
import { animation } from '../../animation/animation';
import './Container.scss';

const Container = ({ customClass, children, variant, onClick, animate }) => {
  const Components = variant ? 'section' : 'div';
  const containerClasses = classNames(customClass, {
    [`container--section`]: variant,
  });

  const { dataSal, dataSalDelay, dataSalDuration, dataSalEasing } = animation;

  return (
    <Components
      className={containerClasses}
      onClick={onClick}
      data-sal={animate && dataSal}
      data-sal-duration={animate && dataSalDuration}
      data-sal-delay={animate && dataSalDelay}
      data-sal-easing={animate && dataSalEasing}
    >
      {children}
    </Components>
  );
};

export default Container;
