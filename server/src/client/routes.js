import React from 'react';
import App from './app';
import HomePage from './pages/home-page';
import UsersListPage from './pages/users-list-page';
import NotFoundPage from './pages/404-page';
import AdminListPage from './pages/admin-list-page';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
  
