import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

const MaterialComponents = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  exports: [MaterialComponents],
  imports: [
    CommonModule,
    MaterialComponents
  ]
})
export class MaterialModule { }
