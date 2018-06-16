import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'mes-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  @Input() project: Project
  
  constructor() { }

  ngOnInit() {
  }

}
