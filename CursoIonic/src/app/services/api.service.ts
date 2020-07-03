import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

   public get(urll){
     let url='http://viacep.com.br/ws/'+urll+'/json/'
     return this.http.get(url).toPromise();
  }
}
