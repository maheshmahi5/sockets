import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';
import io from 'socket.io-client';
import { AppService } from '../app.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
text1: any ;
view = true;
data1;
joincode;
  constructor(private router: Router , private Route: ActivatedRoute, private serv: AppService) { }

  ngOnInit() {
    this.Route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt (params.get('id'));
      if ( id === 1) {
        this.view = false;
      }
    });

    this.text1 = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
    this.text1 += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    this.serv.key = this.text1;
    console.log(this.text1);
    this.sendcode(this.text1);
  }

onEvent(event: any) {
this.joincode = event.target.value;
}

submit() {
  this.serv.key = this.joincode;
  console.log(this.serv.key);
  console.log(this.joincode);
  this.serv.joinmessage(this.joincode);
  this.serv.recievedmessage();
}

sendcode(text1) {
  this.serv.sendMessage(text1);
}
  OnNext() {

    if (this.serv.token === 1) {
    this.router.navigate(['screen3']);
    }

  }
  back() {
    this.router.navigate(['screen1']);
  }

}
