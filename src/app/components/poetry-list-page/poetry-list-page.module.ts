import { PoemService } from './poems/services/poems.service';
import { PoemPageComponent } from './../poem-page/poem-page.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoetryListPageComponent } from './poetry-list-page.component';
import { PoetryListPageRoutingModule } from './poetry-list-page-routing.module';
import { SecretPoemComponent } from '../hidden-pages/secret-poem/secret-poem.component';

@NgModule({
  declarations: [
    PoetryListPageComponent,
    PoemPageComponent,
    SecretPoemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PoetryListPageRoutingModule
  ],
  providers: [PoemService]
})
export class PoetryListPageModule { }
