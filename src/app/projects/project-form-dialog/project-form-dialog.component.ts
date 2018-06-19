import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mes-project-form-dialog',
  templateUrl: './project-form-dialog.component.html'
})
export class ProjectFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
