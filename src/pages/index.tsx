import React, { ReactElement } from 'react';

import { useRoutes } from 'react-router-dom';

import About from './about/ui';
import Home from './home/ui';

const Routing = (): ReactElement | null =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
  ]);

export default Routing;
