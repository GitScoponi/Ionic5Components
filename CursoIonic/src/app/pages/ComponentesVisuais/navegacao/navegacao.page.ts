import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
navegarPara2(){
  this.nav.navigateForward("navegacao2")

}
}
