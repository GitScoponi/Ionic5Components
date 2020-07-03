import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextSpeakerPage } from './text-speaker.page';

const routes: Routes = [
  {
    path: '',
    component: TextSpeakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextSpeakerPageRoutingModule {}
