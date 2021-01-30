import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project!: IProject;

  constructor() { }

  ngOnInit(): void { }

}
