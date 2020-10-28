import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './container/main-page.component'
import { IntroComponent } from './components/intro/intro.component';
import { PhotoBlogComponent } from './components/photo-blog/photo-blog.component';
import { ForewordCareComponent } from './components/foreword-care/foreword-care.component';
import { PictureComponent } from './components/picture/picture.component';
import { FilmSliderComponent } from './components/film-slider/film-slider.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }
];

@NgModule({
  declarations: [ 
    IntroComponent,
    MainPageComponent,
    PhotoBlogComponent,
    ForewordCareComponent,
    PictureComponent,
    FilmSliderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),   
  ]
})
export class MainPageModule { }
