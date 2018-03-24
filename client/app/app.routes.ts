import { Route,RouterModule } from '@angular/router';
//import { LoginComponent } from './index';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { ManagebotComponent } from './managebot/managebot.component';
import { AuthGuard } from '../components/auth/auth-guard.service';
//import {LoginComponent } from  './account/login/login.component';
//import {SettingsComponent } from  './account/settings/settings.component';
//import {SignupComponent } from  './account/signup/signup.component';
//import {AccountModule } from  './account/account.module';
import * as accountComponents from './account';
import { OverviewComponent } from './managebot/overview/overview.component';

import {ManagebotRoutesModule} from './managebot/managebot.routes'

const appRoutes: Route[] = [
    { path: '', redirectTo: '/(main:home)', pathMatch: 'full'},
    { path: 'home', component: MainComponent, outlet: 'main'},
    { path: 'login', component: accountComponents.LoginComponent, outlet: 'main'},
    { path: 'settings', component: accountComponents.SettingsComponent, outlet: 'main'}, 
    { path: 'signup', component: accountComponents.SignupComponent, outlet: 'main'},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], outlet:'main'}, 
    { path: 'managebot', component: ManagebotComponent, canActivate: [AuthGuard], outlet: 'main', loadChildren: './managebot/managebot.module#ManagebotModule'}
];

export const AppRoutesModule = RouterModule.forRoot(appRoutes);

/*export const appRoutes: Route[] = [
    { path: '', redirectTo: '/(main:home)', pathMatch: 'full'},
    { path: 'home', component: MainComponent, outlet: 'main'},
    { path: 'login', component: accountComponents.LoginComponent, outlet: 'main'},
    { path: 'settings', component: accountComponents.SettingsComponent, outlet: 'main'}, 
    { path: 'signup', component: accountComponents.SignupComponent, outlet: 'main'},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], outlet:'main'}, 
    { path: 'managebot', component: ManagebotComponent, canActivate: [AuthGuard], outlet: 'main', children: [
        {path:'overview',component: OverviewComponent, canActivate: [AuthGuard], outlet:'intern'}
    ]}
];*/

/*const appRoutes: Routes = [
    { path: '', redirectTo: '/(main:home)', pathMatch: 'full'},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], outlet:'main'}, 
];*/