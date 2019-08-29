import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tictoe';
}


//  var io = require('socket.io-client');
// var socket2 = io.connect('http://localhost:8123');

// var msg2 = this.ser;
// socket2.emit('bar', msg2);