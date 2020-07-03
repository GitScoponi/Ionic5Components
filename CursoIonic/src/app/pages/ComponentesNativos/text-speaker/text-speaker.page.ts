import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text-speaker',
  templateUrl: './text-speaker.page.html',
  styleUrls: ['./text-speaker.page.scss'],
})
export class TextSpeakerPage implements OnInit {
texto:string="";
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }
  speaker(){
    this.tts.speak({
      text:this.texto,
      locale:"pt-BR",
      rate:0.5
    })
    .then(() => console.log('Funcionou'))
    .catch((reason: any) => console.log(reason));
  }
}
