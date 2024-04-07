import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = enviroment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  criarUser(data:any){
    return this.httpClient.post(this.url+
      "/user/criarUser", data,{
        headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }
}
