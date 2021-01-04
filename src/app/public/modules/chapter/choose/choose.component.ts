import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga } from 'src/app/core/models/manga';
import { MangaService } from 'src/app/core/services/bdd/manga.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  mangaName!: string;
  manga!: Manga;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mangaService: MangaService
  ) { }

  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.has('manga')) {
      this.router.navigateByUrl('/');
    } else {
      this.mangaName = this.route.snapshot.paramMap.get('manga') || "";
      this.mangaService.initMangaService().then(() => {
        (this.manga as (undefined|Manga)) = this.mangaService.getMangaByName(this.mangaName);
        if(!this.manga) {
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
