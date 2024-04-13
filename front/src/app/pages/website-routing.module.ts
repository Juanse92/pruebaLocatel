import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../components/layout/layout.component";
import { ConsignarLoginComponent } from "./consignar-login/consignar-login.component";
import { ConsultarLoginComponent } from "./consultar-login/consultar-login.component";
import { RetirarLoginComponent } from "./retirar-login/retirar-login.component";


const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {path: '',redirectTo: '/consultarLogin',pathMatch:'full'},
            {path: 'consultarLogin', component: ConsultarLoginComponent},
            {path: 'consignarLogin', component: ConsignarLoginComponent},
            {path:'retirarLogin', component: RetirarLoginComponent},
        ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class WebsiteRoutingModule {}