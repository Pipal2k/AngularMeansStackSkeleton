import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap';


import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OauthButtonsComponent } from './oauth-buttons/oauth-buttons.component';
import { SubNavbarComponent } from './subnavbar/subnavbar.component';

import { PanelCreateBotComponent } from './createbotpanel/panel-create-bot.component';

import { FormsModule } from '@angular/forms';
import { CustomMaterialModule} from  './createbotpanel/material.modules';
import {DialogOverviewExampleDialog} from './createbotpanel/dialog-overview-example-dialog.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {DialogOverviewExample, DialogOverviewExampleDialog} from './app/dialog-overview-example'
//import {OverviewComponent } from '../app/managebot/overview/overview.component';






@NgModule({
    imports: [
        CommonModule,
        CollapseModule,
        AuthModule,
        RouterModule,
        CustomMaterialModule,
        FormsModule,
       // DialogOverviewExampleDialog
        //BrowserAnimationsModule
        //MatDialogModule
    ],
    declarations: [
        NavbarComponent,
        SubNavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
        PanelCreateBotComponent,
        DialogOverviewExampleDialog
        //DialogOverviewExampleDialog
       // OverviewComponent
    ],
    exports: [
        NavbarComponent,
        SubNavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
        PanelCreateBotComponent,
        DialogOverviewExampleDialog
        //DialogOverviewExampleDialog
        //OverviewComponent
    ],
    entryComponents:[DialogOverviewExampleDialog]

})
export class DirectivesModule {}
