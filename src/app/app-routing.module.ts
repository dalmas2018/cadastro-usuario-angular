import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent }, // Rota padrão
  { path: 'home', component: HomeComponent }, // Rota para o componente About
  //{ path: 'carros', component: CarrosComponent }, // Rota para o componente About
 
  { path: 'register', component: RegisterComponent}, // Rota para o componente About
  { path: 'login', component: LoginComponent}, // Rota para o componente About
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
