import { Component, OnInit, OnDestroy } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SocketService } from '../../../components/socket/socket.service';


@Component({
    selector: 'overview',
    template: require('./overview.html'),
    styles: [require('./overview.scss')],
   
})
export class OverviewComponent implements OnInit, OnDestroy {
    Http;
    SocketService;
    //menuItems = [{title:"test",link:"/admin"}];
    listBotInstances = [{name: 'Awsome BOT'}, {name: 'Irgendein Bot'}];

    static parameters = [Http, SocketService];
    
    
    constructor(private http: Http, private socketService: SocketService) {
        this.Http = http;
        this.SocketService = socketService;
    }

    ngOnInit() {


    }


    ngOnDestroy() {}

    addThing() {}

    deleteThing(thing) {}
}
