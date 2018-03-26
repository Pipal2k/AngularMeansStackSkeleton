import {
    NgModule,
    Injectable,
    ApplicationRef,
    Provider,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    Http,
    HttpModule,
    BaseRequestOptions,
    RequestOptions,
    RequestOptionsArgs,
} from '@angular/http';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer,
} from '@angularclass/hmr';

import { RouterModule, Routes } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
//import { AuthHttp, AuthConfig } from '@auth0/angular-jwt';
//import { JwtModule } from '@auth0/angular-jwt'

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { DirectivesModule } from '../components/directives.module';
import { AccountModule } from './account/account.module';

import constants from './app.constants';
import { AuthGuard } from '../components/auth/auth-guard.service';
import { AdminModule } from './admin/admin.module';
//import { AdminComponent } from './admin/admin.component';

import { ManagebotModule } from './managebot/managebot.module';
import { AppRoutesModule } from './app.routes';

import {CustomMaterialModule} from '../components/createbotpanel/material.modules';
//import {HttpClientModule , HttpClient } from '@angular/common/http';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PanelCreateBotComponent } from '../components/createbotpanel/panel-create-bot.component';
import { DialogOverviewExampleDialog } from '../components/createbotpanel/dialog-overview-example-dialog.component';
import { FormsModule } from '@angular/forms';


export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        noJwtError: true,
        globalHeaders: [{'Accept': 'application/json'}],
        tokenGetter: (() => localStorage.getItem('id_token')),
    }), http);
}

let providers: Provider[] = [DialogOverviewExampleDialog, {
    provide: AuthHttp,
    useFactory: getAuthHttp,
    deps: [Http]
}];
//let providers: Provider[] = [DialogOverviewExampleDialog];
//let providers: Provider[];

if(constants.env === 'development') {
    @Injectable()
    class HttpOptions extends BaseRequestOptions {
        merge(options: RequestOptionsArgs): RequestOptions {
            options.url = `http://localhost:9000${options.url}`;
            return super.merge(options);
        }
    }

 providers.push({ provide: RequestOptions, useClass: HttpOptions });
}

/*const appRoutes: Routes = [
    { path: '', redirectTo: '/(main:home)', pathMatch: 'full'},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], outlet:'main'}, 
];*/

@NgModule({
    providers,
    //providers: [],
    declarations: [
        AppComponent,
        PanelCreateBotComponent,
        DialogOverviewExampleDialog
    ],
    imports: [
        BrowserModule,
        HttpModule,
        //HttpClientModule,
        AppRoutesModule,
        MainModule,
        DirectivesModule,
        AccountModule,
        AdminModule,
        ManagebotModule,
        CustomMaterialModule,
        FormsModule
      

    ],

    //entryComponents: [DialogOverviewExampleDialog],
    bootstrap: [AppComponent]
    //bootstrap: [PanelCreateBotComponent],

})
export class AppModule {
    static parameters = [ApplicationRef];
    constructor(private appRef: ApplicationRef) {
        this.appRef = appRef;
    }

    hmrOnInit(store) {
        if (!store || !store.state) return;
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data);
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        Reflect.deleteProperty(store, 'state');
        Reflect.deleteProperty(store, 'restoreInputValues');
    }

    hmrOnDestroy(store) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        store.state = {data: 'yolo'};
        // store.state = Object.assign({}, appState)
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        Reflect.deleteProperty(store, 'disposeOldHosts');
        // anything you need done the component is removed
    }
}
