import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

    constructor() { }
    private url = 'http://10.32.13.133:1337';
    private socket;

    sendMessage(message) {
        this.socket.emit('add-message', message);
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                console.log(data);
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })
        return observable;
    }
}