import React from 'react';
import classNames from 'classnames';
import Link from '../Link/Link';
import './Button.scss';

const Button = ({ customClass, name, link, variant, onClick }) => {
  const buttonClasses = classNames('button', customClass, {
    [`button--${variant}`]: variant,
  });

  const renderButton = link ? (
    <Link customClass={buttonClasses} link={link} alt={name}>
      {name}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {name}
    </button>
  );
  return renderButton;
};

export default Button;
