import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N2edmhxuyweo2sl2w5no6Component } from './n2edmhxuyweo2sl2w5no6.component';
import { Nprrb378q6jm5mzfcx7z6Component } from './nprrb378q6jm5mzfcx7z6/nprrb378q6jm5mzfcx7z6.component';

const routes: Routes = [
  {
    path:  '',
    component: N2edmhxuyweo2sl2w5no6Component
  },
  {
    path: 'nprrb378q6jm5mzfcx7z6',
    component: Nprrb378q6jm5mzfcx7z6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class N2edmhxuyweo2sl2w5no6RoutingModule { }
