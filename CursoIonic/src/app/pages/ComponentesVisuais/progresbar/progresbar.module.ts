import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresbarPageRoutingModule } from './progresbar-routing.module';

import { ProgresbarPage } from './progresbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresbarPageRoutingModule
  ],
  declarations: [ProgresbarPage]
})
export class ProgresbarPageModule {}
