import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cuenta } from 'src/app/entities/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-consignar-logout',
  templateUrl: './consignar-logout.component.html',
  styleUrls: ['./consignar-logout.component.scss']
})
export class ConsignarLogoutComponent implements OnInit {

  @Output()FlagRegOut = new EventEmitter<string>();
  ncuenta:number=0
  saldo:number=0
  formconsignar:FormGroup

  constructor(
    private cuentaService:CuentaService,
    private confirmationService:ConfirmationService,
    private messageService:MessageService,
    fb:FormBuilder
  ) {
    this.formconsignar = fb.group({
      ncuenta: ['', Validators.required],
      saldo: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }
  login(){
    this.FlagRegOut.emit('login');
  }

  consignar(){
    this.confirmationService.confirm({
      header: 'Consignación',
      key: 'toast',
      message: 'Está seguro de consignar $'+this.formconsignar.value.saldo+' al numero de cuenta N.'+this.formconsignar.value.ncuenta,
      accept: () => {
        let cuenta = new Cuenta();
        cuenta.saldo=this.formconsignar.value.saldo
        this.cuentaService.putCuentanumero(cuenta,this.formconsignar.value.ncuenta).then(resp=>console.log(resp))
        .catch(er=>{
          this.messageService.add({
            key:'appToast2',
            severity: 'info', 
            summary: 'Información', 
            detail: 'Cuenta no exitente' 
          })
        });
      },
      acceptLabel: 'Si',
      rejectLabel: 'No'
    });
    
  }

}
