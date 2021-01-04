import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter';
import { Manga } from 'src/app/core/models/manga';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  @Input() chapter!: Chapter;
  @Input() manga!: Manga;

  constructor() { }

  ngOnInit(): void {
  }
}
