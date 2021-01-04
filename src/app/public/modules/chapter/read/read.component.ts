import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from 'src/app/core/models/chapter';
import { ChapterService } from 'src/app/core/services/bdd/chapter.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  chapterName!: string;
  chapter!: Chapter;

  constructor(
    private chapterService: ChapterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.has('chapter')) {
      this.router.navigateByUrl('/');
    } else {
      this.chapterName = this.route.snapshot.paramMap.get('chapter') || "";
      this.chapterService.initChapterService().then(() => {
        (this.chapter as (undefined|Chapter)) = this.chapterService.getChapterByName(this.chapterName);
        if(!this.chapter) {
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
