import { Home, Programme, Exercice } from './';

export default {
  path: '',
  childRoutes: [ { path: '', component: Home }, { path: 'programme', component: Programme }, { path: 'exercice', component: Exercice }],
};
