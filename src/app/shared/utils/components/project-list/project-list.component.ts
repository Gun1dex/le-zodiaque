import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/services/bdd/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects!: IProject[];
  @Input() maxSlice: number = 9;
  @Input() page: string = "";

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.initProjectService().then(() => {
      if (this.page === "home") {
        this.projects = this.projectService.getLastModifiedProjects(this.maxSlice);
      } else if(this.page === "projets") {
        this.projects = this.projectService.getAlphabeticalOrderProjects(this.maxSlice);
      } else {
        this.projects = this.projectService.getProjects();
      }
    });
  }

}
