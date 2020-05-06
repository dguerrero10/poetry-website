import { PoemPageComponent } from './../poem-page/poem-page.component';
import { PoetryListPageComponent } from './poetry-list-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PoetryListPageComponent
  },
  {
    path: ':poem_title',
    component: PoemPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoetryListPageRoutingModule { }
