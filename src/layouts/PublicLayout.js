import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header'

function PublicLayout() {
  return (
    <div className={'page-holder'}>
      <div className={'wrapper'}>
        <Header />
        <div className={'main'} style={{marginBottom: '100px'}}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PublicLayout;