import { ContactPageComponent } from './contact-page.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule { }
