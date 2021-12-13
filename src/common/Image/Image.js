import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = ({ image, alt, customClass }) => (
  <GatsbyImage image={image} alt={alt} className={customClass} loading="eager" quality={100} />
);

export default Image;
