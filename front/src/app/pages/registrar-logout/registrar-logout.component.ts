import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/entities/authentication';
import { Cuenta } from 'src/app/entities/cuenta';
import { Usuario } from 'src/app/entities/usuarios';
import { CuentaService } from 'src/app/service/cuenta.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registrar-logout',
  templateUrl: './registrar-logout.component.html',
  styleUrls: ['./registrar-logout.component.scss'],
  providers:[UsuarioService]
})
export class RegistrarLogoutComponent implements OnInit {
  @Output()FlagRegOut = new EventEmitter<string>();

  formCrearUser:FormGroup
  saldo:number=0

  constructor(
    private usuarioService: UsuarioService,
    private cuentaService:CuentaService,
    private router: Router,
    fb:FormBuilder
  ) { 
    this.formCrearUser = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  login(){
    this.FlagRegOut.emit('login');
  }

  crearUser(){
    let usuario= new Usuario();  
    usuario.username=this.formCrearUser.value['username'].toString()
    usuario.email=this.formCrearUser.value['email'].toString()
    usuario.password=this.formCrearUser.value['password'].toString()
    usuario.password2=this.formCrearUser.value['password2'].toString()

    this.usuarioService.create(usuario).then(async (response:any) => {
      let sessionService={idUser:response.id,username:usuario.username,token:response.token}
      localStorage.setItem('sessionService', JSON.stringify(sessionService) )
      this.formCrearUser.reset()


      let cuenta=new Cuenta()
      cuenta.usuario=response.id
      cuenta.numerocuenta= Math.floor(1000 + Math.random() * 8999);
      cuenta.saldo=this.saldo;
      await this.cuentaService.create(cuenta)
      this.router.navigate(['/locatel/consultarLogin']);
    })
  }

}
