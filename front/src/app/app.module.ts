import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateModule } from 'primeng/animate';
import { TabViewModule } from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RegistrarLogoutComponent } from './pages/registrar-logout/registrar-logout.component';
import { ConsignarLogoutComponent } from './pages/consignar-logout/consignar-logout.component';
import { LoginComponent } from './pages/login/login.component';
import { IngresarLogoutComponent } from './pages/ingresar-logout/ingresar-logout.component';
import { UsuarioService } from './service/usuario.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


declare global{
  interface navegator{
    msSaveBlod?: (blod:any, defaultName?:string)=>boolean
  }
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrarLogoutComponent,
    ConsignarLogoutComponent,
    LoginComponent,
    IngresarLogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    AnimateModule,
    BrowserAnimationsModule,
    TabViewModule,
    DropdownModule,
    MenuModule,
    TableModule,
    PanelModule,
    ReactiveFormsModule,
    DialogModule,
    CalendarModule,
    RadioButtonModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [UsuarioService,MessageService,ConfirmationService], // Registra tu servicio aquí

  bootstrap: [AppComponent]
})
export class AppModule { }
