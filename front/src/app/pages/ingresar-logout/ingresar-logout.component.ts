import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/entities/authentication';
import { CuentaService } from 'src/app/service/cuenta.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-ingresar-logout',
  templateUrl: './ingresar-logout.component.html',
  styleUrls: ['./ingresar-logout.component.scss']
})
export class IngresarLogoutComponent implements OnInit {
  @Output()FlagInOut = new EventEmitter<string>();

  formLogin: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private cuentaService:CuentaService,
    private router: Router,
    fb:FormBuilder
  ) { 
    this.formLogin = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  registro(){
    this.FlagInOut.emit('registrar');
  }
  login(){
    let auth=new Authentication()
    auth.username=this.formLogin.value['username'].toString()
    auth.password=this.formLogin.value['password'].toString()
      this.usuarioService.authentication(auth).then(async (response:any) => {
        let idUser=0
        await this.usuarioService.getCuenta_username(auth.username).then((resp:any)=>{idUser=resp.id})
        .catch(er=>{console.log(er)})

        let sessionService={idUser:idUser,username:auth.username,token:response.token}
        localStorage.setItem('sessionService', JSON.stringify(sessionService))
        this.router.navigate(['/locatel/consultarLogin']);
      })
  }
}
