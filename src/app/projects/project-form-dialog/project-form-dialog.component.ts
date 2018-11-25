import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'mes-project-form-dialog',
  templateUrl: './project-form-dialog.component.html',
  providers: [ProjectService]
})
export class ProjectFormDialogComponent implements OnInit {

  formGroupProject: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProjectFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.formGroupProject = new FormGroup({
      nome_projeto: new FormControl('')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  salvaProjeto() {
    let project: Project = {
      title: this.formGroupProject.get('nome_projeto').value
    }

    this.projectService.saveProject(project)
  }

}
