import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './compenets/Navbar'; // Adjust the import path as necessary

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
