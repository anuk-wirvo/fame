import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//routing
import { AppRoutingModule } from './app-routing.module';

// lib
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountResetComponent } from './account-reset/account-reset.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MobileAuthComponent } from './mobile-auth/mobile-auth.component';
import { MobileAuthStep2Component } from './mobile-auth-step-2/mobile-auth-step-2.component';
import { FbLoginComponent } from './fb-login/fb-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountResetComponent,
    ResetPasswordComponent,
    MobileAuthComponent,
    MobileAuthStep2Component,
    FbLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
