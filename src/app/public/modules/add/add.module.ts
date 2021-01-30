import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMangaComponent } from './add-manga/add-manga.component';


@NgModule({
  declarations: [AddChapterComponent, AddMangaComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddModule { }
