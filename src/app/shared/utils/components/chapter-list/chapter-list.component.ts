import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter';
import { IProject } from 'src/app/core/models/project';
import { ChapterService } from 'src/app/core/services/bdd/chapter.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters!: Chapter[];
  @Input() project!: IProject;

  constructor(private chapterService: ChapterService) { }

  ngOnInit(): void {
    this.chapterService.initChapterService().then(() => {
      this.chapters = this.chapterService.getChaptersOfProject(this.project.key);
    });
  }
}
