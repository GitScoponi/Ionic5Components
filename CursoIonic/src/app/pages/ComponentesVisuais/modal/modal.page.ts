import { ModaltesteComponent } from './../../../components/modalteste/modalteste.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  
  constructor(private modalController:ModalController) { }
  
  ngOnInit() {
  }
  async abrirModal(){
    const modal = await this.modalController.create({
      component: ModaltesteComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'}
      });
      return await modal.present();
    }
  }
  