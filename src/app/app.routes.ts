import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsalGuard } from '@azure/msal-angular';
import { LoginComponent } from './login/login.component';
import { FailedComponent } from './failed/failed.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [MsalGuard],
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login-failed',
    component: FailedComponent,
  },
];
