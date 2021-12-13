import React from 'react';
import { Link as InternalLink } from 'gatsby';

const Link = ({ children, link, customClass, alt }) => (
  <InternalLink to={link} className={customClass} alt={alt} aria-label={alt}>
    {children}
  </InternalLink>
);

export default Link;
