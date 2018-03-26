import { Route,RouterModule } from '@angular/router';
//import { LoginComponent } from './index';
//import { MainComponent } from './main/main.component';
//import { AdminComponent } from './admin/admin.component';
//import { ManagebotComponent } from './managebot/managebot.component';
import { AuthGuard } from '../../components/auth/auth-guard.service';
//import {LoginComponent } from  './account/login/login.component';
//import {SettingsComponent } from  './account/settings/settings.component';
//import {SignupComponent } from  './account/signup/signup.component';
//import {AccountModule } from  './account/account.module';
//import * as accountComponents from './account';
import { OverviewComponent } from './overview/overview.component';
import { InstancesComponent } from './instances/instances.component';


const manageBotRoutes: Route[] = [
    {path:'overview',component: OverviewComponent, outlet:'intern'},
    {path:'instances',component: InstancesComponent, outlet:'intern'}
];

/*const appRoutes: Routes = [
    { path: '', redirectTo: '/(main:home)', pathMatch: 'full'},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], outlet:'main'}, 
];*/

export const ManagebotRoutesModule = RouterModule.forChild(manageBotRoutes);