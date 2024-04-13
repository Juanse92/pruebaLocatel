import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarLogoutComponent } from './pages/registrar-logout/registrar-logout.component';
import { ConsignarLogoutComponent } from './pages/consignar-logout/consignar-logout.component';

const routes: Routes = [
  { path: '',redirectTo:'/login',pathMatch: 'full'},
  { path: 'login',component: LoginComponent},
  {
    path: 'locatel',
    loadChildren: () =>import('./pages/website.module').then(m =>m.WebsiteModule),
    data: {
      preload: true,
    },
  },
  { path: 'registro',component: RegistrarLogoutComponent},
  { path: 'consignar',component: ConsignarLogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
