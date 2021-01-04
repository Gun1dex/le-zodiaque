import { Component, Input, OnInit } from '@angular/core';
import { Manga } from 'src/app/core/models/manga';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {
  @Input() manga!: Manga;

  constructor() { }

  ngOnInit(): void { }

}
