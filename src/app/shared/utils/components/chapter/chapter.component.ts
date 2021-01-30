import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter';
import { IProject } from 'src/app/core/models/project';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  @Input() chapter!: Chapter;
  @Input() project!: IProject;

  constructor() { }

  ngOnInit(): void {
  }
}
