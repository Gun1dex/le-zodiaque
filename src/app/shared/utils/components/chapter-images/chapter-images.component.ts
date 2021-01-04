import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter';

@Component({
  selector: 'app-chapter-images',
  templateUrl: './chapter-images.component.html',
  styleUrls: ['./chapter-images.component.css']
})
export class ChapterImagesComponent implements OnInit {
  @Input() chapter!: Chapter;

  constructor() { }

  ngOnInit(): void { }
}
