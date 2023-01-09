import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicLayout from 'layouts/PublicLayout'
import Home from 'pages/Home'

function Router() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router;