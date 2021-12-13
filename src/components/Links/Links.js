import React from 'react';
import classNames from 'classnames';
import Container from '../../layout/Container/Container';
import Typography from '../../common/Typography/Typography';
import './Links.scss';

const Links = ({ links, animate, customClass }) => {
  const linksClasses = classNames('links', customClass);
  return (
    <Container customClass={linksClasses} animate={animate}>
      {links.map((link, index) => {
        const { url, name } = link;
        return (
          <Typography variant="p" type="link" key={index}>
            <a className="links__name" href={url} target="_blank" rel="noreferrer" alt={name}>
              {name}
            </a>
          </Typography>
        );
      })}
    </Container>
  );
};

export default Links;
