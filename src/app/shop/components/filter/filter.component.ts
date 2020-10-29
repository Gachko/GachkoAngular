import { Component, EventEmitter, Output } from '@angular/core';

interface Genre {
  genre: string,
  checked: boolean
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent  {

  @Output()
  checkGenre = new EventEmitter<any>();

  genre: Genre[] = [
    {
      genre: "ALL",
      checked: true
    },
    {
      genre: "POP",
      checked: false
    },
    {
      genre: "ROCK",
      checked: false
    },
    {
      genre: "RAP & HIP-HOP",
      checked: false
    },
    {
      genre: "ELECTRONIC",
      checked: false
    },
    {
      genre: "SOUL",
      checked: false
    },
    {
      genre: "CLASSICAL",
      checked: false
    },
    {
      genre: "JAZZ",
      checked: false
    }
  ];

  chooseGenre ($event) {
  this.checkGenre.emit($event.target.value)
  }

}
