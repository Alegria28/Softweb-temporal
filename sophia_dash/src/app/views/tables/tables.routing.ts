import { Routes } from '@angular/router';

import { FilterTableComponent } from './filter-table/filter-table.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'filter',
      component: FilterTableComponent,
      data: { title: 'Filter', breadcrumb: 'FILTER' }
    }, ]
  }
];
