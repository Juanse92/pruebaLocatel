import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cuenta } from 'src/app/entities/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-consignar-login',
  templateUrl: './consignar-login.component.html',
  styleUrls: ['./consignar-login.component.scss']
})
export class ConsignarLoginComponent implements OnInit {

  constructor(
    private cuentaService: CuentaService,
  ) { }
  idUser=JSON.parse(localStorage.getItem('sessionService')).idUser
  numeroCuenta:string;
  saldo:string;
  saldoNuevo:number=0;
  idCuenta:string

  ngOnInit(): void {

    this.cuentaService.getCuenta_id(this.idUser).then((response : any) => {
      this.idCuenta=response.id.toString()
      this.numeroCuenta=response.numerocuenta
      this.saldo=response.saldo
    })
  }

  recargar(){
    let cuenta=new Cuenta()
    cuenta.numerocuenta=parseFloat(this.numeroCuenta);
    cuenta.saldo=this.saldoNuevo+parseFloat(this.saldo);
    cuenta.usuario=this.idUser

    this.cuentaService.putCuenta(cuenta,this.idCuenta).then(resp=>this.saldoNuevo=0)
  }

}
