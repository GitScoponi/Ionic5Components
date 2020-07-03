import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsApiPage } from './cons-api.page';

const routes: Routes = [
  {
    path: '',
    component: ConsApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsApiPageRoutingModule {}
