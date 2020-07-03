import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  nome:string="";
  pessoas:any;
  pessoasFiltradas:any;
  constructor() { 
    this.pessoas=[
      {id:1,idade:18,nome:"alexandra"},
      {id:2,idade:25,nome:"brito"},
      {id:3,idade:14,nome:"romero"},
      {id:4,idade:42,nome:"angela"},
      {id:5,idade:17,nome:"vinicius"},
      {id:6,idade:33,nome:"helena"},
      {id:7,idade:38,nome:"valdir"},
      {id:8,idade:90,nome:"roberto"},
      {id:9,idade:57,nome:"maria"},
    ];
    this.pessoasFiltradas = this.pessoas;
    
  }
  
  ngOnInit() {
  }
  filtrar(e){
    this.nome = e.target.value.toLowerCase();
    this.pessoasFiltradas = this.filtrarPessoa(this.nome);
  }
  filtrarPessoa(nome:string){
    this.pessoasFiltradas = this.pessoas;
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLocaleLowerCase());
    });
  }
  clear(){
    this.pessoasFiltradas = this.pessoas;

  }
}
