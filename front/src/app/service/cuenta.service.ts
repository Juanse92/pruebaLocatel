import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../entities/usuarios';
import { Authentication } from '../entities/authentication';
import { Cuenta } from '../entities/cuenta';


@Injectable({
  providedIn: 'root'
})

  export class CuentaService {

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  putCuenta(cuenta: any,id:string){
    let urlEndPoint: string = 'http://localhost:8000/locatel/'+id;
    return new Promise((resolve,reject)=>{
      this.http.put<Cuenta>(urlEndPoint,cuenta,{headers: this.httpHeaders} )
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

  getCuenta_id(id:string){
    let urlEndPoint: string = 'http://localhost:8000/locatel/'+id;
    return new Promise((resolve,reject)=>{
      this.http.get<Cuenta>(urlEndPoint,{headers: this.httpHeaders})
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

 

  create(cuenta: Cuenta){
    let urlEndPoint: string = 'http://localhost:8000/locatel/cuenta/';
    return new Promise((resolve,reject)=>{
      this.http.post<Cuenta>(urlEndPoint,cuenta,{headers: this.httpHeaders} )
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

