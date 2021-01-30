import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/services/bdd/project.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  projectName!: string;
  project!: IProject;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.has('project')) {
      this.router.navigateByUrl('/');
    } else {
      this.projectName = this.route.snapshot.paramMap.get('project') || "";
      this.projectService.initProjectService().then(() => {
        (this.project as (undefined|IProject)) = this.projectService.getProjectByName(this.projectName);
        if(!this.project) {
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
