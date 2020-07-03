import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompNativosPage } from './comp-nativos.page';

const routes: Routes = [
  {
    path: '',
    component: CompNativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompNativosPageRoutingModule {}
