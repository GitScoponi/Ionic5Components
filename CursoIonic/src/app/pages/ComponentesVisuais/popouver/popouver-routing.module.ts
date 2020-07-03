import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopouverPage } from './popouver.page';

const routes: Routes = [
  {
    path: '',
    component: PopouverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopouverPageRoutingModule {}
