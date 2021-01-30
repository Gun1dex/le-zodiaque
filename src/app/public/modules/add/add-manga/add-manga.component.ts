import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manga } from 'src/app/core/models/manga';
import { GenderService } from 'src/app/core/services/bdd/gender.service';
import { MangaService } from 'src/app/core/services/bdd/manga.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  addMangaForm!: FormGroup;
  imagesBase64!: string;

  genders!: string[];

  showForm = false;

  nameValid = true;
  gendersValid = true;
  acronymValid = true;
  imagesValid = true;

  constructor(
    private gendersService: GenderService,
    private mangaService: MangaService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.gendersService.initGenderService().then(() => {
      this.genders = this.gendersService.getGenders();
      this.showForm = true;
    });
  }

  initForm(): void {
    this.addMangaForm = new FormGroup({
      name: new FormControl('zz', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      genders: new FormControl('', [Validators.required]),
      acronym: new FormControl('', [Validators.required]),
      images: new FormControl(null, [Validators.required]),
    });
  }

  changeImages(event: Event): void {
    let input = event.target as HTMLInputElement;
    (this.imagesBase64 as String | undefined) = undefined;

    if (input.files && input.files.length) {
      const file = input.files[0];
      this.convertImage(file);
    };
  }

  convertImage(file: File) {
    let reader = new FileReader();

    const load = (event: Event) => {
      const result = (event.target as FileReader).result;
      this.imagesBase64 = result as string;
    };

    reader.onload = load;
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.nameValid = this.addMangaForm.get('name')?.valid ? true : false;

    this.gendersValid = this.addMangaForm.get('genders')?.valid ? true : false;

    this.acronymValid = this.addMangaForm.get('acronym')?.valid ? true : false;

    this.imagesValid = !!this.imagesBase64 ? true : false;

    if (this.nameValid && this.gendersValid && this.acronymValid && this.imagesValid) {
      const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

      const manga: Manga = {
        key: "",
        name: this.addMangaForm.get('name')?.value,
        description: this.addMangaForm.get('description')?.value,
        gender: this.addMangaForm.get('genders')?.value,
        acronym: this.addMangaForm.get('acronym')?.value,
        image: this.imagesBase64,
        language: "",
        lastModification: currentDate,
        lastChapterName: "",
        visible: false
      }

      this.mangaService.addManga(manga);
    }
  }
}
