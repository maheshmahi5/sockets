import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class AppService {
key;
token;
  private url = 'http://192.168.2.207:8123';
  private socket2;

  constructor() {

  

}
sendMessage(id) {

  this.socket2 = io.connect( this.url );
  let  msg2  =  this.key;
    this.socket2.emit('bar', msg2);

}

joinmessage(id) {
  this.socket2 = io.connect( this.url );
  let  msg2 =  this.key;
  this.socket2.emit('event', msg2);
}

recievedmessage() {

  this.socket2.on('serverevent', msg1 => {
    this.token = msg1;
    console.log(new Date(), msg1);
  });
}




// socket.emit('serverevent');
// socket.on('filename', function(filename) {
//     console.log('Filename received: ' + filename);
// });

}
