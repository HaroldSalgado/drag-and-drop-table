import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { CdkDragDropSortingExample } from './cdk-drag-drop-sorting-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CdkDragDropSortingExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [CdkDragDropSortingExample],
})
export class AppModule {}
