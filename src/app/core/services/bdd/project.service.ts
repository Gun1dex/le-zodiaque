import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProject } from '../../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects$!: Promise<IProject[]>;
  projects!: IProject[];

  isInitialized = false;

  constructor(private db: AngularFirestore) {
    this.projects$ = this.getProjectsDB().toPromise();
  }

  async initProjectService(): Promise<void> {
    if (!this.isInitialized) {
      return this.projects$.then(projects => {
        this.projects = projects;
        this.isInitialized = true;
      });
    }
  }

  getProjectByName(projectName: string): IProject | undefined {
    return this.projects.find(m => m.name === projectName);
  }

  getProjects(): IProject[] {
    return this.projects;
  }

  getLastModifiedProjects(number: number): IProject[] {
    return this.projects.sort((a, b) => (a.lastModification > b.lastModification) ? 1 : ((b.lastModification > a.lastModification) ? -1 : 0)).slice(0, number);
  }

  getAlphabeticalOrderProjects(number: number): IProject[] {
    return this.projects.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).slice(0, number);
  }

  addProject(project: IProject) {
    return this.db.collection('projects').add({
      name: project.name,
      description: project.description,
      gender: project.genders,
      sigle: project.sigle,
      image: project.image,
      language: "",
      lastModification: project.lastModification,
      lastChapterName: "",
      visible: project.visible,
      otherNames: project.otherNames,
      author: project.author,
      artist: project.artist,
      shocking: project.shocking,
      licence: project.licence
    });
  }

  getProjectsDB(): Observable<IProject[]> {
    return this.db.collection("projects").get().pipe(
      map((actions) =>
        actions.docs.map((action) => {
          return { key: action.id, ... (action.data() as any) } as IProject;
        })
      ));
  }

}
