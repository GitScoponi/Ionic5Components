import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouglePageRoutingModule } from './tougle-routing.module';

import { TouglePage } from './tougle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouglePageRoutingModule
  ],
  declarations: [TouglePage]
})
export class TouglePageModule {}
