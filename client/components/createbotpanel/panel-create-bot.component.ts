import { Component,Inject,Injectable } from '@angular/core';

import { Router } from '@angular/router';
//import { AuthService } from '../auth/auth.service';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialog} from "./dialog-overview-example-dialog.component";
import {Overlay} from '@angular/cdk/overlay';



@Component({
    selector: 'panelCreateBot',
    template: require('./panel-create-bot.html'),
    styles: [require('./panel-create-bot.scss')],
    //providers: [AuthService]
})
export class PanelCreateBotComponent {
    animal: string;
    name: string;

    //overlay: Overlay;
    
  
    
    constructor(public dialog: MatDialog,public overlay: Overlay) {}

  openDialog(): void {
    //this.showError("Invalid credentials");
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '800px',
      //height: '2000px',
      //scrollStrategy: thisc,
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  /*showError(error : string) : void {
    this.dialog.open(DialogOverviewExampleDialog, {
      data: {errorMsg: error} ,width : '250px'
    });
  }*/
}