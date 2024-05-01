import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./_layout/home-layout/home-layout.component').then(c => c.HomeLayoutComponent),
        children: [
            {path: '', component: HomeComponent}
        ]
    },
     /*
    {
       
        path: '/auth', loadComponent: () => import('').then(c => c.Authlayout),
        children: [

        ]
        
    },
    */
    {
        path: 'app', loadComponent: () => import('./_layout/app-layout/app-layout.component').then(c => c.AppLayoutComponent),
        children: [
            {path: '', component: DashboardComponent}
        ]
    }
];
