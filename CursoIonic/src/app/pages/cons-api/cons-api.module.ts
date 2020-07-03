import { ApiService } from './../../services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsApiPageRoutingModule } from './cons-api-routing.module';

import { ConsApiPage } from './cons-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsApiPageRoutingModule
  ],
  declarations: [ConsApiPage],
  providers:[ApiService]
})
export class ConsApiPageModule {}
