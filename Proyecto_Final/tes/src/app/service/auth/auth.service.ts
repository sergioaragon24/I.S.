import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credenciales): Observable<any> {
    let url ="http://localhost:3003/login";
    return this.http.post(url, credenciales, httpHeader);
  }

  register(userinfo): Observable<any> {
    let url ="http://localhost:3003/registro";
    return this.http.post(url, userinfo, httpHeader);
  }
  islogin(){
    let islog = localStorage.getItem("isLogin") === "valido";
    return islog;
  }

  guardarSenal(){
    localStorage.setItem("isLogin", "valido");
  }


}
