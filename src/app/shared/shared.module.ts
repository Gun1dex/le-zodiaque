import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from './utils/utils.module';

const MODULES = [
  UtilsModule,
  FlexLayoutModule
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
