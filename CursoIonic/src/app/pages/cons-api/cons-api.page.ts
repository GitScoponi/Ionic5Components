import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cons-api',
  templateUrl: './cons-api.page.html',
  styleUrls: ['./cons-api.page.scss'],
})
export class ConsApiPage implements OnInit {
  cep:string="";
  resultado:any={bairro:"",logradouro:"",localidade:""}
  constructor(private api:ApiService) { }
  
  ngOnInit() {
    
  }
  consultarCEP(){
    this.api.get(this.cep)
    .then(result=>
      {
        console.log(result);
        this.resultado=result;
      })
      .catch(error=>{console.log(error)})
      
    }
    
  }
  