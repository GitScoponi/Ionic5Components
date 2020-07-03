import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  escolha:string="";
  constructor() { }
  
  ngOnInit() {
    this.escolha="frutas";
  }
  selecionado(ev: any) {
this.escolha=ev.detail.value;
  }
}