import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-nativos',
  templateUrl: './comp-nativos.page.html',
  styleUrls: ['./comp-nativos.page.scss'],
})
export class CompNativosPage implements OnInit {

  menuCollection:any[];
  constructor(private navCtr:NavController) {
    this.menuCollection = [  
      {
        title: 'Camera', url: 'camera', icon: 'camera'
      },
      {
        title: 'Text to Speech', url: 'text-speaker', icon: 'mic'
      },
    ]
  }
  
  ngOnInit() {
  }
  irPara(url:string){
    this.navCtr.navigateForward(url);
  }
}
