import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouglePage } from './tougle.page';

const routes: Routes = [
  {
    path: '',
    component: TouglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouglePageRoutingModule {}
