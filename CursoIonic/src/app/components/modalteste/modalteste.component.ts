import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-modalteste',
  templateUrl: './modalteste.component.html',
  styleUrls: ['./modalteste.component.scss'],
})
export class ModaltesteComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor(private modalCtrl:ModalController,private popCtrl:PopoverController) { }

  ngOnInit() {
    console.log(this.firstName);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  dismissPop(){
    this.popCtrl.dismiss({
      'dismissed':true
    });
  }
}
