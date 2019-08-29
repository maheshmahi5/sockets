import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  key: any = [];
  constructor(private router: Router , private serv: AppService) { }

  ngOnInit() {
  }
 OnStart() {
   this.key = 0;
   this.router.navigate(['screen2', this.key]);
 }
 OnJoin() {
   this.key = 1;
   this.router.navigate(['screen2', this.key]);
 }
}
