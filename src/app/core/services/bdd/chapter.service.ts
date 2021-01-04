import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from '../../models/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chapters$!: Promise<Chapter[]>;
  chapters!: Chapter[];

  isInitialized = false;

  constructor(private http: HttpClient) {
    this.chapters$ = this.http.get<Chapter[]>('/assets/mocks/mock_chapters.json').toPromise();
  }

  async initChapterService(): Promise<void> {
    if (!this.isInitialized) {
      return this.chapters$.then(chapters => {
        this.chapters = chapters;
        this.isInitialized = true;
      });
    }
  }

  getChapter(id: string): Chapter | undefined {
    return this.chapters.find(m => m.key === id);
  }

  getChapterByName(chapterName: string): Chapter | undefined {
    return this.chapters.find(m => m.title === chapterName);
  }

  getChapters(): Chapter[] {
    return this.chapters;
  }

  getChaptersOfManga(idManga: string): Chapter[] {
    return this.chapters.filter(m => m.mangaId === idManga);
  }
}
