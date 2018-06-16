import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'mes-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    { title: 'Sigconcursos'},
    { title: 'Carteira SET'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
