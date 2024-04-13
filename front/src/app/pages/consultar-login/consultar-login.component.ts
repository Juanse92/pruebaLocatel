import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-consultar-login',
  templateUrl: './consultar-login.component.html',
  styleUrls: ['./consultar-login.component.scss']
})
export class ConsultarLoginComponent implements OnInit {

  constructor(
    private cuentaService: CuentaService,
  ) { }
  idUser=JSON.parse(localStorage.getItem('sessionService')).idUser
  numeroCuenta:string;
  saldo:string;
  ngOnInit(): void {

    this.cuentaService.getCuenta_id(this.idUser).then((response : any) => {
      this.numeroCuenta=response.numerocuenta
      this.saldo=response.saldo
    })
  }


}
