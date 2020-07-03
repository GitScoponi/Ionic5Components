import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopouverPageRoutingModule } from './popouver-routing.module';

import { PopouverPage } from './popouver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopouverPageRoutingModule
  ],
  declarations: [PopouverPage]
})
export class PopouverPageModule {}
