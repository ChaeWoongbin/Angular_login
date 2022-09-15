import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CheckComponent } from './check/check.component';
import { NoComponent } from './no/no.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSuccessComponent } from './login-success/login-success.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    CheckComponent,
    NoComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
