import { Project } from './project.model';

export class ProjectService {
    
    getProjects(): Project[] {

        let projects = JSON.parse(localStorage.getItem('projects'));
        return <Project[]>projects;
    }
}