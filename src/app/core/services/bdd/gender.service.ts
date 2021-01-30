import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  genders$!: Promise<string[]>;
  genders!: string[];

  isInitialized = false;

  constructor(private http: HttpClient) {
    this.genders$ = this.http.get<string[]>('/assets/mocks/mock_genders.json').toPromise();
  }

  async initGenderService(): Promise<void> {
    if (!this.isInitialized) {
      return this.genders$.then(genders => {
        this.genders = genders;
        this.isInitialized = true;
      });
    }
  }

  getGenders(): string[] {
    return this.genders;
  }
}
