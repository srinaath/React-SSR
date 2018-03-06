import React from 'react';
import Home from './components/home';
import UsersList, {loadData}  from './components/users-list';

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    loadData,
    component: UsersList,
    path: '/users'
  }
];
