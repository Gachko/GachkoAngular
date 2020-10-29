import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CareBlogComponent } from './container/care-blog/care-blog.component';
import { CareItemComponent } from './components/care-item/care-item.component';

export const routes: Routes = [
  {
    path: '',
    component: CareBlogComponent
  }
];


@NgModule({
  declarations: [
    CareItemComponent,
    CareBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CareModule { }
