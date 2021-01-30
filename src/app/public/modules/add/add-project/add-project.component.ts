import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderService } from 'src/app/core/services/bdd/gender.service';
import * as moment from 'moment';
import { IProject } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/services/bdd/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  addProjectForm!: FormGroup;
  imagesBase64!: string;

  genders!: string[];

  showForm = false;

  nameValid = true;
  gendersValid = true;
  sigleValid = true;
  imagesValid = true;

  constructor(
    private gendersService: GenderService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.gendersService.initGenderService().then(() => {
      this.genders = this.gendersService.getGenders();
      this.showForm = true;
    });
  }

  initForm(): void {
    this.addProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      genders: new FormControl('', [Validators.required]),
      sigle: new FormControl('', [Validators.required]),
      otherNames: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      artist: new FormControl('', [Validators.required]),
      shocking: new FormControl('', [Validators.required]),
      licence: new FormControl('', [Validators.required]),
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
    this.nameValid = this.addProjectForm.get('name')?.valid ? true : false;

    this.gendersValid = this.addProjectForm.get('genders')?.valid ? true : false;

    this.sigleValid = this.addProjectForm.get('sigle')?.valid ? true : false;

    this.imagesValid = !!this.imagesBase64 ? true : false;

    if (this.nameValid && this.gendersValid && this.sigleValid && this.imagesValid) {
      const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

      const project: IProject = {
        key: "",
        name: this.addProjectForm.get('name')?.value,
        otherNames: this.addProjectForm.get('otherNames')?.value,
        description: this.addProjectForm.get('description')?.value,
        genders: this.addProjectForm.get('genders')?.value,
        sigle: this.addProjectForm.get('sigle')?.value,
        author: this.addProjectForm.get('author')?.value,
        artist: this.addProjectForm.get('artist')?.value,
        shocking: this.addProjectForm.get('shocking')?.value,
        licence: this.addProjectForm.get('licence')?.value,
        image: this.imagesBase64,
        language: "",
        lastModification: currentDate,
        lastChapterName: "",
        visible: false
      }

      this.projectService.addProject(project);
    }
  }
}
