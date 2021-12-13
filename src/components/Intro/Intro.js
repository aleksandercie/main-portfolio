import React from 'react';
import classNames from 'classnames';
import Link from '../../common/Link/Link';
import './Intro.scss';

const Intro = ({ homepage, show }) => {
  const itemMainClasses = classNames('intro__item--main', {
    [`intro__item--hide`]: show,
  });
  const itemSecondaryClasses = classNames('intro__item--secondary', {
    [`intro__item--show`]: show,
  });
  const menuClasses = classNames('intro__item', {
    [`menu--show`]: show,
  });

  return (
    <ul className="intro">
      {homepage.map((item) => {
        const { id, secondary, link, alt } = item;
        return (
          <li className={menuClasses} key={id}>
            <Link link={link} customClass={itemMainClasses} alt={alt} />
            <Link link={link} customClass={itemSecondaryClasses} alt={alt}>
              {secondary}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Intro;
