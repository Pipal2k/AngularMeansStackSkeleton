import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '../../components/directives.module';

import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
    imports: [
        FormsModule,
        BrowserModule,

        //RouterModule.forChild(accountRoutes),
        DirectivesModule,
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        SettingsComponent,
    ],
    //exports: [LoginComponent, SettingsComponent, SignupComponent],
    
})
export class AccountModule {}

