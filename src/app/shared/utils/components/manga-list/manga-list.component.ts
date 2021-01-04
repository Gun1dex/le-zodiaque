import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/bdd/manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas!: Manga[];
  @Input() maxSlice: number = 9;

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangaService.initMangaService().then(() => {
      this.mangas = this.mangaService.getMangas();
    });
  }

}
