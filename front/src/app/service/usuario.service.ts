import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../entities/usuarios';
import { Authentication } from '../entities/authentication';


@Injectable({
  providedIn: 'root'
})

  export class UsuarioService {

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  // create(usuario: Usuario): Observable<Usuario>{
  //   console.log('a')
  //   return this.http.post<Usuario>(this.urlEndPoint,usuario,{headers: this.httpHeaders} )
  // }

  authentication(crenciales: Authentication){
    let urlEndPoint: string = 'http://localhost:8000/account/login/';
    return new Promise((resolve,reject)=>{
      this.http.post<Usuario>(urlEndPoint,crenciales,{headers: this.httpHeaders} )
      .subscribe(
        res=>{
          resolve(res);
        },
        err => {
          reject(err)
        }
      )
    })
  }

  logOut(token: any){
    let urlEndPoint: string = 'http://localhost:8000/account/logout/';
    return new Promise((resolve,reject)=>{
      this.http.post<Usuario>(urlEndPoint,token,{headers: this.httpHeaders} )
      .subscribe(
        res=>{
          resolve(res);
        },
        err => {
          reject(err)
        }
      )
    })
  }

  create(usuario: Usuario){
    let urlEndPoint: string = 'http://localhost:8000/account/register/';
    return new Promise((resolve,reject)=>{
      this.http.post<Usuario>(urlEndPoint,usuario,{headers: this.httpHeaders} )
      .subscribe(
        res=>{
          resolve(res);
        },
        err => {
          reject(err)
        }
      )
    })
  }
  getCuenta_username(name:String){
    let urlEndPoint: string = 'http://localhost:8000/account/name/'+name;
    return new Promise((resolve,reject)=>{
      this.http.get<Usuario>(urlEndPoint,{headers: this.httpHeaders})
      .subscribe(
        res=>{
          resolve(res);
        },
        err => {
          reject(err)
        }
      )
    })
  }

}

