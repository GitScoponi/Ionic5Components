import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tougle',
  templateUrl: './tougle.page.html',
  styleUrls: ['./tougle.page.scss'],
})
export class TouglePage implements OnInit {
sausage:boolean;
mushrooms:boolean;
pepperoni:boolean;
  constructor() { }

  ngOnInit() {
  }

}
