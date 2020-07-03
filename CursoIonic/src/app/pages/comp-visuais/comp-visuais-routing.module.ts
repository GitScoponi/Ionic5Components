import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompVisuaisPage } from './comp-visuais.page';

const routes: Routes = [
  {
    path: '',
    component: CompVisuaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompVisuaisPageRoutingModule {}
