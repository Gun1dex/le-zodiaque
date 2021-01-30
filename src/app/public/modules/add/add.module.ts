import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddRoutingModule } from './add-routing.module';

@NgModule({
  declarations: [AddChapterComponent, AddProjectComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddModule { }
