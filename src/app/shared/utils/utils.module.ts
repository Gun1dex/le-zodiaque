import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MangaComponent } from './components/manga/manga.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsComponent } from './components/news/news.component';
import { DiscordWidgetComponent } from './components/discord-widget/discord-widget.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';
import { ChapterImagesComponent } from './components/chapter-images/chapter-images.component';

const MODULES = [
  RouterModule
];

const COMPONENTS = [
  MangaComponent,
  MangaListComponent,
  CarouselComponent,
  NewsComponent,
  DiscordWidgetComponent,
  ChapterComponent,
  ChapterListComponent,
  MangaDetailComponent,
  ChapterImagesComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...COMPONENTS]
})
export class UtilsModule { }
