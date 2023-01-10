/* eslint-disable arrow-body-style */
import React from 'react';
import Sidebar from 'shared/Sidebar';
import style from './index.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={style.layout_wrapper}>
      <Sidebar />
      <div className={style.layout_content}>{children}</div>
    </div>
  );
};

export default Layout;
