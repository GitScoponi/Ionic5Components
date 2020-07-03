import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresbarPage } from './progresbar.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresbarPageRoutingModule {}
