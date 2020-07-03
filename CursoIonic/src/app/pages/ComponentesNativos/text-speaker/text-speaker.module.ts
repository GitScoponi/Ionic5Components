import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

import { IonicModule } from '@ionic/angular';

import { TextSpeakerPageRoutingModule } from './text-speaker-routing.module';

import { TextSpeakerPage } from './text-speaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextSpeakerPageRoutingModule
  ],
  declarations: [TextSpeakerPage],
  providers:[TextToSpeech]
})
export class TextSpeakerPageModule {}
