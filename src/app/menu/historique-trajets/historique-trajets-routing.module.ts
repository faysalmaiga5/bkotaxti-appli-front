import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueTrajetsPage } from './historique-trajets.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueTrajetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueTrajetsPageRoutingModule {}
