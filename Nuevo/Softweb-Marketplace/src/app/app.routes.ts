import { Routes } from '@angular/router';
import { HomeThreeComponent } from './shop/home-three/home-three.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/three',
    pathMatch: 'full'
  },
  {
    path: 'home/three',
    component: HomeThreeComponent
  }
];
