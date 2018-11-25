import { Project } from './project.model';

export class ProjectService {
    
    getProjects(): Project[] {

        let projects = JSON.parse(localStorage.getItem('projects'));
        if(!projects) {
            return [];
        }
        return <Project[]>projects;
    }

    getProjectById(id: number): Project {
        let projects: Project[] = <Project[]>JSON.parse(localStorage.getItem('projects'));
        let project: Project = projects.find(project => project.id === id);
        return project;
    }

    getSequence(): number {
        let value: any = localStorage.getItem('sequence')
        if(!value) {
            return 0
        }

        return parseInt(value)
    }

    setSequence(value: number) {
        localStorage.setItem('sequence', value.toString())
    }

    saveProject(project: Project) {
        let projects: Project[] = this.getProjects()
        let sequence: number = this.getSequence()
        sequence = sequence + 1
        project.id = sequence
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
        this.setSequence(sequence)
    }
}