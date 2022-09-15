import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  form = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

 constructor(private session : SessionService, private rout: Router) {
 }

 

 ngOnInit(): void {
 }

  request_account(): void{
    
  }

  login(){
    alert(this.form.value.id);
    if(this.form.value.id == 'admin' && this.form.value.password == '1234'){ // 하드코딩
      this.session.setInfo(this.form.value.id); // 세션에 아이디 정보를 넣어줌(예제니까 간단하게)
      this.rout.navigateByUrl('no'); // 로그인 성공시 이동할 페이지
      return;
    }else{
      alert('로그인 실패');
    }
  }
}
