import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../../models/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  mangas$!: Promise<Manga[]>;
  mangas!: Manga[];

  isInitialized = false;

  constructor(private http: HttpClient) {
    this.mangas$ = this.http.get<Manga[]>('/assets/mocks/mock_mangas.json').toPromise();
  }

  async initMangaService(): Promise<void> {
    if (!this.isInitialized) {
      return this.mangas$.then(mangas => {
        this.mangas = mangas;
        this.isInitialized = true;
      });
    }
  }

  getMangaByName(mangaName: string): Manga | undefined {
    return this.mangas.find(m => m.name === mangaName);
  }

  getMangas(): Manga[] {
    return this.mangas;
  }

  getLastModifiedMangas(number: number): Manga[] {
    return this.mangas.sort((a, b) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)).slice(0, number);
  }
}
