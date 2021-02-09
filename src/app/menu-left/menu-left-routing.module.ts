import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLeftPage } from './menu-left.page';


const routes: Routes = [
    {
        path: 'menu',
        component: MenuLeftPage,
        children: [
            {
                path: 'login',
                loadChildren: () => import('../menu/login/login.module').then(m => m.LoginPageModule)
            },
            {
                path: '',
                redirectTo: '/menu/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuLeftPageRoutingModule {}
