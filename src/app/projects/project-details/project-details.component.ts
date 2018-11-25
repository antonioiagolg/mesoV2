import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mes-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.params['id']);
    this.project = this.projectService.getProjectById(id);
  }

}
