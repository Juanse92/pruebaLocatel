import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @Input('FlagLogIn')
  // set LogIn(FlagLogIn:boolean) 
  //   {
  //     this.FlagLogIn = FlagLogIn;
  //   }

  // @Input('Flagregister')
  // set registerIn(Flagregister:boolean) 
  //   {
  //     this.Flagregister = Flagregister;
  //   }

  // @Input('FlagRecarga')
  // set recargaIn(FlagRecarga:boolean) 
  //   {
  //     this.FlagRecarga = FlagRecarga;
  //   }

  FlagLogIn:boolean=true
  Flagregister:boolean=false
  FlagRecarga:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

  chageView(eve:string){
    if(eve=='registrar'){
      this.FlagLogIn=false
      this.Flagregister=true
      this.FlagRecarga=false
    }else if(eve=='login'){
      this.FlagLogIn=true
      this.Flagregister=false
      this.FlagRecarga=false
    }else if(eve=='consignar'){
      this.FlagLogIn=false
      this.Flagregister=false
      this.FlagRecarga=true
    }
  }

}
