import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/entities/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-retirar-login',
  templateUrl: './retirar-login.component.html',
  styleUrls: ['./retirar-login.component.scss']
})
export class RetirarLoginComponent implements OnInit {

  constructor(
    private cuentaService: CuentaService,
  ) { }

  idUser=JSON.parse(localStorage.getItem('sessionService')).idUser
  numeroCuenta:string;
  saldo:string;
  saldoNuevo:number=0;
  idCuenta:string
  numeroR:number=0
  flagNumeroRetiro:boolean=true

  ngOnInit(): void {
    this.cuentaService.getCuenta_id(this.idUser).then((response : any) => {
      this.idCuenta=response.id.toString()
      this.numeroCuenta=response.numerocuenta
      this.saldo=response.saldo
    })
  }

  retirar(){
    if(this.saldoNuevo<=parseFloat(this.saldo)){
      let cuenta=new Cuenta()
      cuenta.numerocuenta=parseFloat(this.numeroCuenta);
      cuenta.saldo=parseFloat(this.saldo)-this.saldoNuevo;
      cuenta.usuario=this.idUser

      this.cuentaService.putCuenta(cuenta,this.idCuenta).then(resp=>this.saldoNuevo=0).then(resp=>{
        this.numeroR=Math.floor(10 + Math.random() * 89)
        this.flagNumeroRetiro=false
      })
    }
  }

}
