import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';


const routes: Routes = [
  {
    path:'button',
    component:AppComponent
  },
  {
    path:'get',
    component :FormComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'button',
    component:ButtonComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
