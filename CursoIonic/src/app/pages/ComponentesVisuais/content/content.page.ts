import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
Titulo:boolean=false;
  constructor() { }

  ngOnInit() {
  }
ScrollStart(){
  this.Titulo=true;
}

ScrollEnd(){
  this.Titulo=false;
}
Scroll(e){
  // console.log(e)
}
}
