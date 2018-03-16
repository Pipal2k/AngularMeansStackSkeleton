import { Component, OnInit, OnDestroy } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SocketService } from '../../components/socket/socket.service';

@Component({
    selector: 'test',
    template: require('./test.html'),
})
export class TestComponent implements OnInit, OnDestroy {
    Http;
    SocketService;


    static parameters = [Http, SocketService];

    constructor(private http: Http, private socketService: SocketService) {
        this.Http = http;
        this.SocketService = socketService;
    }

    ngOnInit() {}


    ngOnDestroy() {}

    addThing() {}

    deleteThing(thing) {}
}
