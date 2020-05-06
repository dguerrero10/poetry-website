import { PoemService } from './poems/poems.service';
import { PoemPageComponent } from './../poem-page/poem-page.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoetryListPageComponent } from './poetry-list-page.component';
import { PoetryListPageRoutingModule } from './poetry-list-page-routing.module';

@NgModule({
  declarations: [
    PoetryListPageComponent,
    PoemPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PoetryListPageRoutingModule
  ],
  providers: [PoemService]
})
export class PoetryListPageModule { }
