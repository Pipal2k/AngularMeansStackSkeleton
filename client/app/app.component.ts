import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<navbar></navbar>
    <router-outlet name="main"></router-outlet>
    <footer></footer>`
})
export class AppComponent {}
