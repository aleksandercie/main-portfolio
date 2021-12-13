import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/global.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
