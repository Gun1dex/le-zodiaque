import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChapterRoutingModule } from './chapter-routing.module';
import { ChooseComponent } from './choose/choose.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    ChooseComponent,
    ReadComponent
  ],
  imports: [
    SharedModule,
    ChapterRoutingModule
  ]
})
export class ChapterModule { }
