import {NgModule,
    Injectable,
    ApplicationRef,
    Provider } from '@angular/core';
import {
    Http,
    HttpModule,
    BaseRequestOptions,
    RequestOptions,
    RequestOptionsArgs,
} from '@angular/http';
import {CommonModule} from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from '../../components/auth/auth-guard.service';
import { AuthModule } from '../../components/auth/auth.module';
import { ManagebotComponent } from './managebot.component';
//import { SubNavbarComponent } from '../../components/subnavbar/subnavbar.component';
import { DirectivesModule } from '../../components/directives.module';
//import {} from '@angular/material';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import constants from '../app.constants';
//import { OverviewModule } from './Overview/overview.module';
import { ManagebotRoutesModule } from './managebot.routes';
import { OverviewComponent } from './overview/overview.component';


/*const managebotRoutes: Routes = [{
    path: 'managebot',
    component: ManagebotComponent,
    canActivate: [AuthGuard],
    outlet: 'main'
}];*/


@NgModule({
    imports: [
        AuthModule,
        CommonModule,
        //BrowserModule,
       RouterModule,
       DirectivesModule,
        ManagebotRoutesModule
        //OverviewModule
    ],
    declarations: [
        ManagebotComponent,
        OverviewComponent
    ],
    /*exports: [
        ManagebotComponent,
        OverviewComponent
    ],*/
})
export class ManagebotModule {}
