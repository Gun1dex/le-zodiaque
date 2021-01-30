import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  { path: 'chapitre', component: AddChapterComponent },
  { path: 'project', component: AddProjectComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
