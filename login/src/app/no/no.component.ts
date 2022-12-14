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
    alert('๋ก๊ทธ์์');
    this.router.navigateByUrl('login');
  }
}
