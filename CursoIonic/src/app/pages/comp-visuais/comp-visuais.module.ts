import { AppModule } from './../../app.module';
import { OrderPipe } from './../../pipes/order.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CompVisuaisPageRoutingModule } from './comp-visuais-routing.module';

import { CompVisuaisPage } from './comp-visuais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompVisuaisPageRoutingModule,
  ],
  declarations: [CompVisuaisPage, OrderPipe]
})
export class CompVisuaisPageModule {}
