import React from 'react';
import Typography from '../../common/Typography/Typography';

const Subtitle = ({ subtitle }) => (
  <Typography variant="h2" customClass="subtitle" type="subtitle">
    {subtitle}
    <Typography variant="span" customClass="subtitle__dot" type="dot">
      .
    </Typography>
  </Typography>
);

export default Subtitle;
