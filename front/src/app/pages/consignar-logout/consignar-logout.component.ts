import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consignar-logout',
  templateUrl: './consignar-logout.component.html',
  styleUrls: ['./consignar-logout.component.scss']
})
export class ConsignarLogoutComponent implements OnInit {

  @Output()FlagRegOut = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    this.FlagRegOut.emit('login');
  }

}
