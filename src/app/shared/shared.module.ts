import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/utils.module';

const MODULES = [
  UtilsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    CommonModule,
    ...MODULES
  ]
})
export class SharedModule { }
