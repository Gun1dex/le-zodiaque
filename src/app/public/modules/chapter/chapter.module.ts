import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChapterRoutingModule } from './chapter-routing.module';
import { ChooseComponent } from './choose/choose.component';
import { ReadComponent } from './read/read.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    ChooseComponent,
    ReadComponent,
    AddComponent
  ],
  imports: [
    SharedModule,
    ChapterRoutingModule
  ]
})
export class ChapterModule { }
