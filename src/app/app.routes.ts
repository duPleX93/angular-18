import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./modules/test/test.component').then((m) => m.TestComponent),
  },
];
