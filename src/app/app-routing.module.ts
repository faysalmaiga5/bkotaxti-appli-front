import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./menu/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-left',
    loadChildren: () => import('./menu-left/menu-left.module').then( m => m.MenuLeftPageModule)
  },
  {
    path: 'historique-trajets',
    loadChildren: () => import('./menu/historique-trajets/historique-trajets.module').then( m => m.HistoriqueTrajetsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./menu/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./menu/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'choix',
    loadChildren: () => import('./choix/choix.module').then( m => m.ChoixPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
