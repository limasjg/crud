import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  server = 'http://localhost/apiAngular/';

  constructor( private http: HttpClient) { }

  Api(dados: any, api: string) {
    const HttpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.server + api;
    return this.http.post(url, JSON.stringify(dados),
    HttpOptions).map(res => res);
  }

}
