import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { N2edmhxuyweo2sl2w5no6RoutingModule } from './n2edmhxuyweo2sl2w5no6-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { N2edmhxuyweo2sl2w5no6Component } from './n2edmhxuyweo2sl2w5no6.component';
import { Nprrb378q6jm5mzfcx7z6Component } from './nprrb378q6jm5mzfcx7z6/nprrb378q6jm5mzfcx7z6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [N2edmhxuyweo2sl2w5no6Component, Nprrb378q6jm5mzfcx7z6Component],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    N2edmhxuyweo2sl2w5no6RoutingModule
  ]
})
export class N2edmhxuyweo2sl2w5no6Module { }
