import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicRoutingModule } from './public-routing.module';
import { ChapterModule } from './modules/chapter/chapter.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule,
    ChapterModule
  ]
})
export class PublicModule { }
