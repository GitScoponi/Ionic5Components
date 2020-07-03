import { ModaltesteComponent } from './../../../components/modalteste/modalteste.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popouver',
  templateUrl: './popouver.page.html',
  styleUrls: ['./popouver.page.scss'],
})
export class PopouverPage implements OnInit {

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ModaltesteComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
