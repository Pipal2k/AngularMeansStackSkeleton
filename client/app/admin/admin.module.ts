import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
//import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from '../../components/auth/auth-guard.service';
//import { AuthModule } from '../../components/auth/auth.module';
import { AdminComponent } from './admin.component';


/*const adminRoutes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    outlet: 'main'
}];*/

@NgModule({
    imports: [
        CommonModule
        //AuthModule,
        //BrowserModule,
       // RouterModule.forChild(adminRoutes),

    ],
    declarations: [
        AdminComponent,
    ],
    exports: [
        AdminComponent,
    ],
})
export class AdminModule {}
