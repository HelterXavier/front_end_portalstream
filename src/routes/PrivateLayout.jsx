import React from 'react';
import Navbar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const PrivateLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
