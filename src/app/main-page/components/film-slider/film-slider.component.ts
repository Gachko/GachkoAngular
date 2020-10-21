import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films/films.service';
import { IFilm } from '../../models/films.interface';
@Component({
  selector: 'app-film-slider',
  templateUrl: './film-slider.component.html',
  styleUrls: ['./film-slider.component.scss'],
  providers:  [ FilmsService ]
})
export class FilmSliderComponent implements OnInit {

  films: IFilm[];
  currentFilm: IFilm;
  i = 0;
 
  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.films = this.filmService.getFilms();
    console.log(this.films)
    this.currentFilm = this.films[0];
  }

  ngDoCheck() {
    this.currentFilm = this.films[this.i];
  }


  previous() {
    if( this.i === 0 ) {
      this.i = this.films.length-1;
      return this.i;
    }
    this.i --;

  }

  next() {
    if( this.i ===  this.films.length-1  ) {
      this.i = 0;
      return this.i;
    }
    this.i++;
  }

}
