import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-no',
  templateUrl: './no.component.html',
  styleUrls: ['./no.component.css']
})
export class NoComponent implements OnInit {

  constructor(private session : SessionService, private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.session.logOut();
    alert('로그아웃');
    this.router.navigateByUrl('login');
  }
}
