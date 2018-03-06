import React from 'react';
import HomePage from './pages/home-page';
import UsersListPage from './pages/users-list-page';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  }
];
