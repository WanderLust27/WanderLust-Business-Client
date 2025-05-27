import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../features/landing-page/pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
];
