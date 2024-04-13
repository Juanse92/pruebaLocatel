import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametroNavegacionService } from 'src/app/service/parametro-navegation.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  title = 'Prueba desarrollador';

  user:string=''


  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('sessionService')).username
  }

  logOut(){
    let token='Token '+JSON.parse(localStorage.getItem('sessionService')).token
    let auth={"Authorization": token}
localStorage.removeItem('sessionService'),
      this.router.navigate(['/login']);
    // this.usuarioService.logOut(auth).then(resp=>{
    //   localStorage.removeItem('sessionService'),
    //   this.router.navigate(['/login']);
    // }).catch(err => console.log(err));
  }

}
