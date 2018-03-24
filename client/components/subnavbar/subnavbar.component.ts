import { Component,Injectable,Input,Inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
    selector: 'subnavbar',
    template: require('./subnavbar.html'),
    styles: [require('./subnavbar.scss')],
    //providers: [AuthService]
})
@Injectable()
export class SubNavbarComponent {
    isCollapsed = true;
    /*listNavBarItems = [{
        title: 'Instances',
        'link': '/test/instances',
    },
    {
       title: 'link2',
       'link': '/test/link2',
    }];*/
    //let listNavBarItems;
    @Input() listOfMenuItems; 

    //Router;
    
    //static parameters = [AuthService, Router];
    //constructor(private x: string) {
    /*constructor(@Inject(AuthService) AuthService) {
        //this.AuthService = authService;

       //this.Router = router;
        //this.AuthService = authService;

        //this.Router = router;

        //this.reset();

        //this.listOfMenuItems = listOfMenuItems;

        
    }*/
}
