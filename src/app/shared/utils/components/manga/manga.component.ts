import { Component, Input, OnInit } from '@angular/core';
import { Manga } from 'src/app/core/models/manga';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  @Input() manga!: Manga;

  constructor() { }

  ngOnInit(): void { }
}
