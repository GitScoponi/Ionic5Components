import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompNativosPageRoutingModule } from './comp-nativos-routing.module';

import { CompNativosPage } from './comp-nativos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompNativosPageRoutingModule
  ],
  declarations: [CompNativosPage]
})
export class CompNativosPageModule {}
