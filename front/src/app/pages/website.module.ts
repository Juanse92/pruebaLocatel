import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from '../components/head/head.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { TabViewModule } from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';

import {MenuModule} from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

import { ParametroNavegacionService } from '../service/parametro-navegation.service';

import { RadioButtonModule } from 'primeng/radiobutton';
import { LayoutComponent } from '../components/layout/layout.component';
import { ConsultarLoginComponent } from './consultar-login/consultar-login.component';
import { ConsignarLoginComponent } from './consignar-login/consignar-login.component';
import { RetirarLoginComponent } from './retirar-login/retirar-login.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    HeadComponent,
    LayoutComponent,
    ConsultarLoginComponent,
    ConsignarLoginComponent,
    RetirarLoginComponent,
  ],
  imports: [
    WebsiteRoutingModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    AnimateModule,
    TabViewModule,
    DropdownModule,
    MenuModule,
    TableModule,
    PanelModule,
    ReactiveFormsModule,
    DialogModule,
    CalendarModule,
    RadioButtonModule,
    CommonModule,
  ],
  providers: [
    ParametroNavegacionService,
  ]
})
export class WebsiteModule { }