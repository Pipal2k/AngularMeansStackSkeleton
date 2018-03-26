import { Component, OnInit, OnDestroy } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SocketService } from '../../components/socket/socket.service';



@Component({
    selector: 'managebot',
    template: require('./managebot.html'),
    styles: [require('./managebot.scss')],
   
})
export class ManagebotComponent implements OnInit, OnDestroy {
    Http;
    SocketService;
    //menuItems = [{title:"test",link:"/(intern:/managebot/overview)"}];
    menuItems = [{title:"Overview",link:"overview"},
                {title:"Instances",link:"instances"}];

    
    listBotInstances = [{name: 'Awsome BOT'}, {name: 'Irgendein Bot'}];

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
