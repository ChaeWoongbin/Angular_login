import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlreadyGuardGuard implements CanActivate {
 
  constructor(private session : SessionService, private rout: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var info : any = this.session.getInfo();
    if(info != null && info != ""){
      console.log(info);
      alert("로그인 중입니다");
      return false;
    }
    return true;
  }
  
}
