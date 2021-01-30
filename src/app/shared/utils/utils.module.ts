import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsComponent } from './components/news/news.component';
import { DiscordWidgetComponent } from './components/discord-widget/discord-widget.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterImagesComponent } from './components/chapter-images/chapter-images.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectComponent } from './components/project/project.component';

const MODULES = [
  RouterModule
];

const COMPONENTS = [
  ProjectComponent,
  ProjectListComponent,
  CarouselComponent,
  NewsComponent,
  DiscordWidgetComponent,
  ChapterComponent,
  ChapterListComponent,
  ProjectDetailComponent,
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
