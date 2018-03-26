import { Component, OnInit, OnDestroy } from '@angular/core';

//import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { SocketService } from '../../../components/socket/socket.service';


@Component({
    selector: 'instances',
    template: require('./instances.html'),
    styles: [require('./instances.scss')],
   
})
export class InstancesComponent implements OnInit, OnDestroy {
    //Http;
    //SocketService;
    //menuItems = [{title:"test",link:"/admin"}];
    listBotInstances = [{name: 'Awsome BOT'}, {name: 'Irgendein Bot'}];

    //static parameters = [Http, SocketService];
    
    
    /*constructor(private http: Http, private socketService: SocketService) {
        //this.Http = http;
        //this.SocketService = socketService;
    }*/

    ngOnInit() {


    }


    ngOnDestroy() {}

    addThing() {}

    deleteThing(thing) {}
}
