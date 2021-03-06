import {Component, Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  templateUrl: './components/createbotpanel/dialog-overview-example-dialog.html'
})

export class DialogOverviewExampleDialog {

  constructor(private dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

}
