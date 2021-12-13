import React from 'react';
import classNames from 'classnames';
import { animation } from '../../animation/animation';
import './Typography.scss';

const Typography = ({ variant, customClass, type, children, align, animate }) => {
  const Components = variant;
  const typographyClasses = classNames(customClass, {
    [`typography__${type}`]: type,
    [`typography--${align}`]: align,
  });

  const { dataSal, dataSalDelay, dataSalDuration, dataSalEasing } = animation;

  return (
    <Components
      className={typographyClasses}
      data-sal={animate && dataSal}
      data-sal-duration={animate && dataSalDuration}
      data-sal-delay={animate && dataSalDelay}
      data-sal-easing={animate && dataSalEasing}
    >
      {children}
    </Components>
  );
};

export default Typography;
