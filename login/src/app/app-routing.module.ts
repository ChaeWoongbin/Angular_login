import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './check/check.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NoComponent } from './no/no.component';
import { AlreadyGuardGuard } from './session/already-guard.guard';
import { AuthGuard } from './session/auth.guard'


const AppRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 첫 화면을 main 페이지로 설정
  
  { path: 'no', component: NoComponent }, // main
  { path: 'check', component: LoginSuccessComponent, canActivate: [AuthGuard] }, // main
  { path: 'login', component: LoginpageComponent, canActivate: [AlreadyGuardGuard] }, // main



];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
