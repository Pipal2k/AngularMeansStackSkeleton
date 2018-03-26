import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap';


import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OauthButtonsComponent } from './oauth-buttons/oauth-buttons.component';
import { SubNavbarComponent } from './subnavbar/subnavbar.component';
//import { PanelCreateBotComponent } from './createbotpanel/panelCreateBot.component';
//import {DialogOverviewExample, DialogOverviewExampleDialog} from './app/dialog-overview-example'
//import {OverviewComponent } from '../app/managebot/overview/overview.component';






@NgModule({
    imports: [
        CommonModule,
        CollapseModule,
        AuthModule,
        RouterModule,
        //MatDialogModule
    ],
    declarations: [
        NavbarComponent,
        SubNavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
       // PanelCreateBotComponent,
        //DialogOverviewExampleDialog
       // OverviewComponent
    ],
    exports: [
        NavbarComponent,
        SubNavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
        //PanelCreateBotComponent,
        //DialogOverviewExampleDialog
        //OverviewComponent
    ]
})
export class DirectivesModule {}
