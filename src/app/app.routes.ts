import { Routes } from '@angular/router';
import { RoutePrefix } from './route-prefixes';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: RoutePrefix.Home,
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
      { path: RoutePrefix.Login, component: LoginComponent },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
