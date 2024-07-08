import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/pages/dashboard.component'),
        children:[]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'aventura',
        loadComponent: () => import('./dashboard/pages/aventura/aventura.component'),
        children:[]
    },
    {
        path: 'dosjugadores',
        loadComponent: () => import('./dashboard/pages/dosjugadores/dosjugadores.component'),
        children:[]
    },
    {
        path: 'familiar',
        loadComponent: () => import('./dashboard/pages/familiar/familiar.component'),
        children:[]
    },
    {
        path: 'ninos',
        loadComponent: () => import('./dashboard/pages/ninos/ninos.component'),
        children:[]
    },
    {
        path: 'carrito',
        loadComponent: () => import('./shared/carro/carro.component'),
        children:[]
    },
    {
        path: 'login',
        loadComponent: () => import('./shared/login/login.component'),
        children:[]
    },
    {
        path: 'registro',
        loadComponent: () => import('./dashboard/pages/registro/registro.component'),
        children:[]
    }

];
