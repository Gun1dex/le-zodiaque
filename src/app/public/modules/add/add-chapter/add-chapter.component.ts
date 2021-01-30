import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {
  addChapterForm!: FormGroup;

  nameValid = true;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addChapterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.addChapterForm.get('name')?.valid) {
      console.log(this.addChapterForm.get('name')?.value);
      this.nameValid = true;
    } else {
      this.nameValid = false;
    }
  }
}
