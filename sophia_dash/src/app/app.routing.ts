import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard/default', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard/default',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
    component: AdminLayoutComponent,
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'auth', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
   
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule), 
        data: { title: 'Dashboard', breadcrumb: 'Dashboard'}
      },
      {
        path: 'material', 
        loadChildren: () => import('./views/material-example-view/material-example-view.module').then(m => m.MaterialExampleViewModule), 
        data: { title: 'Material', breadcrumb: 'Materail'}
      },
      {
        path: 'dialogs', 
        loadChildren: () => import('./views/app-dialogs/app-dialogs.module').then(m => m.AppDialogsModule), 
        data: { title: 'Dialogs', breadcrumb: 'Dialogs'}
      },
      {
        path: 'profile', 
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule), 
        data: { title: 'Profile', breadcrumb: 'Profile'}
      },
      {
        path: 'others', 
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule), 
        data: { title: 'Others', breadcrumb: 'Others'}
      },
      {
        path: 'tables', 
        loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule), 
        data: { title: 'Tables', breadcrumb: 'Tables'}
      },
      {
        path: 'pricing', 
        loadChildren: () => import('./views/app-pricing/app-pricing.module').then(m => m.AppPricingModule), 
        data: { title: 'Pricing', breadcrumb: 'Pricing'}
      },
      
      {
        path: 'forms', 
        loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule), 
        data: { title: 'Forms', breadcrumb: 'Forms'}
      },
      {
        path: 'chart',
        loadChildren: () => import('./views/chart-example-view/chart-example-view.module').then(m => m.ChartExampleViewModule), 
        data: { title: 'Charts', breadcrumb: 'Charts'}
      },
      {
        path: 'charts', 
        loadChildren: () => import('./views/charts/charts.module').then(m => m.AppChartsModule), 
        data: { title: 'Charts', breadcrumb: 'Charts'}
      },
      
      {
        path: 'help', 
        loadChildren: () => import('./views/help/help.module').then(m => m.AppHelpModule), 
        data: { title: 'Help', breadcrumb: 'Help'}
      },
     
     
      {
        path: 'users', 
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule), 
        data: { title: 'User', breadcrumb: 'User'}
      },
      {
        path: 'shop', 
        loadChildren: () => import('./views/shop/shop.module').then(m => m.ShopModule), 
        data: { title: 'Shop', breadcrumb: 'Shop'}
      },
      {
        path: 'search', 
        loadChildren: () => import('./views/search-view/search-view.module').then(m => m.SearchViewModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule),
        data: { title: 'Pages ', breadcrumb: 'Invoice'}
      },
   
      {
        path: 'orders',
        loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule),
        data: { title: 'Orders', breadcrumb: 'Orders'}
      },
      {
        path: 'page-layouts',
        loadChildren: () => import('./views/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
      },
      
      {
        path: 'icons', 
        loadChildren: () => import('./views/mat-icons/mat-icons.module').then(m => m.MatIconsModule), 
        data: { title: 'Icons', breadcrumb: 'Maticons'}
      },
      {
        path: 'colors', 
        loadChildren: () => import('./views/colors/colors.module').then(m => m.ColorsModule), 
        data: { title: 'Colors', breadcrumb: 'Colors'}
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

