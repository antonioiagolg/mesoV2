import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormDialogComponent } from './project-form-dialog/project-form-dialog.component';

@Component({
  selector: 'mes-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  
  constructor(private projectService: ProjectService, public dialog: MatDialog) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  openProjectFormDialog(): void {
    let dialogRef = this.dialog.open(ProjectFormDialogComponent, {
      width: '400px',
      height: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
