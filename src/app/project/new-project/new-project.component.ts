import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public  data,
               public dialogRef: MatDialogRef<NewProjectComponent>,
               public oc: OverlayContainer) {

  }

  ngOnInit() {
    this.oc.getContainerElement().className = this.data.dark ? 'myapp-dark-theme' : null;
  }

  onClick() {
    this.dialogRef.close('你好，yyh123');
  }
}
