import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { AddMangaComponent } from './add-manga/add-manga.component';

const routes: Routes = [
  { path: 'chapitre', component: AddChapterComponent },
  { path: 'manga', component: AddMangaComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
