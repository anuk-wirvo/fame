import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountResetComponent } from './account-reset/account-reset.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MobileAuthComponent } from './mobile-auth/mobile-auth.component';
import { MobileAuthStep2Component } from './mobile-auth-step-2/mobile-auth-step-2.component';
import { FbLoginComponent } from './fb-login/fb-login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'fame/account-reset', component:AccountResetComponent},
  {path:'fame/reset-password', component:ResetPasswordComponent},
  {path:'fame/mobile-auth', component:MobileAuthComponent},
  {path:'fame/mobile-auth-step-2', component:MobileAuthStep2Component},
  {path:'fame/fb-login', component:FbLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
