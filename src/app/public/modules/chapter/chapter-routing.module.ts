import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: ':project', component: ChooseComponent },
  { path: ':project/:chapter', component: ReadComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
