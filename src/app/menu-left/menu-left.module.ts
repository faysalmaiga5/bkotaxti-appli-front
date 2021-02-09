import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuLeftPageRoutingModule } from './menu-left-routing.module';

import { MenuLeftPage } from './menu-left.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuLeftPageRoutingModule
  ],
  declarations: [MenuLeftPage]
})
export class MenuLeftPageModule {}
