import { Routes } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailsComponent } from "./projects/project-details/project-details.component";

export const appRoutes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/detail/:id', component: ProjectDetailsComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
]