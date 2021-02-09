import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueTrajetsPageRoutingModule } from './historique-trajets-routing.module';

import { HistoriqueTrajetsPage } from './historique-trajets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueTrajetsPageRoutingModule
  ],
  declarations: [HistoriqueTrajetsPage]
})
export class HistoriqueTrajetsPageModule {}
