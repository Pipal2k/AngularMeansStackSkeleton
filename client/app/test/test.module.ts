import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../components/auth/auth-guard.service';
import { AuthModule } from '../../components/auth/auth.module';
import { TestComponent } from './test.component';


const adminRoutes: Routes = [{
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard],
}];

@NgModule({
    imports: [
        AuthModule,
        BrowserModule,
        RouterModule.forChild(adminRoutes),
    ],
    declarations: [
        TestComponent,
    ],
    exports: [
        TestComponent,
    ],
})
export class AdminModule {}
