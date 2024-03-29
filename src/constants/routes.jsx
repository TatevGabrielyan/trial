import React from 'react';
import Homepage from '../pages/Home/Home'


const routes = [
  {
    id: 1,
    path: '/',
    private: false,
    component: () => <Homepage />
  },
];

export default routes;
