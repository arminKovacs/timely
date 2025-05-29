
import { Routes } from '@angular/router';
import { RoutePrefix } from './route-prefixes';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
  },
  {
    path: RoutePrefix.Login,
    canActivate: [authGuard],
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
