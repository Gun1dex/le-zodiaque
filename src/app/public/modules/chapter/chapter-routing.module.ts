import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: ':manga', component: ChooseComponent },
  { path: ':manga/:chapter', component: ReadComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
