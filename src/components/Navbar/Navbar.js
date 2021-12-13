import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from '../../common/Link/Link';
import Container from '../../layout/Container/Container';
import './Navbar.scss';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      window.scrollY > 5 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isScroll]);

  const navbarClasses = classNames('navbar', { 'navbar--black': isScroll });

  return (
    <Container customClass={navbarClasses}>
      <Link link="/" customClass="navbar__link" alt="aleksander.">
        <span className="navbar__sign">aleksander</span>
        <span className="navbar__dot">.</span>
        <span className="navbar__line" />
      </Link>
    </Container>
  );
};

export default Navbar;
