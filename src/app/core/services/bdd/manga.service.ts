import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../../models/manga';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MangaService {
  mangas$!: Promise<Manga[]>;
  mangas!: Manga[];

  isInitialized = false;

  constructor(private db: AngularFirestore) {
    this.mangas$ = this.getMangasDB().toPromise();
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
    return this.mangas.sort((a, b) => (a.lastModification > b.lastModification) ? 1 : ((b.lastModification > a.lastModification) ? -1 : 0)).slice(0, number);
  }

  getAlphabeticalOrderMangas(number: number): Manga[] {
    return this.mangas.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).slice(0, number);
  }

  addManga(manga: Manga) {
    return this.db.collection('mangas').add({
      name: manga.name,
      description: manga.description,
      gender: manga.gender,
      acronym: manga.acronym,
      image: manga.image,
      language: "",
      lastModification: manga.lastModification,
      lastChapterName: "",
      visible: manga.visible
    });
  }

  getMangasDB(): Observable<Manga[]> {
    return this.db.collection("mangas").get().pipe(
      map((actions) =>
        actions.docs.map((action) => {
          return { key: action.id, ... (action.data() as any) } as Manga;
        })
      ));
  }

}
