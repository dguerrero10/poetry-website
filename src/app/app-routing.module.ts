import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () => import('../app/components/home-page/home-page.module').then(mod => mod.HomePageModule)
  },
  {
    path: 'contact-page',
    loadChildren: () => import('../app/components/contact-page/contact-page.module').then(mod => mod.ContactPageModule)
  },
  {
    path: 'poetry-list-page',
    loadChildren: () => import('../app/components/poetry-list-page/poetry-list-page.module').then(mod => mod.PoetryListPageModule)
  },
  {
    path: 'n2edmhxuyweo2sl2w5no6',
    loadChildren: () => import('../app/components/n2edmhxuyweo2sl2w5no6/n2edmhxuyweo2sl2w5no6.module').then(mod => mod.N2edmhxuyweo2sl2w5no6Module)
  },
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
