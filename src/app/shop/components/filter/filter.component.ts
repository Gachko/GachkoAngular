import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

interface IGenre {
  value: number,
  genre: string,
  checked: boolean
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {



  @Output()
  checkGenre = new EventEmitter<any>();



  genre: IGenre[] = [
    {
      value: 0,
      genre: "ALL",
      checked: false
    },
    {
      value: 1,
      genre: "POP",
      checked: false
    },
    {
      value: 2,
      genre: "ROCK",
      checked: false
    },
    {
      value: 3,
      genre: "RAP & HIP-HOP",
      checked: false
    },
    {
      value: 4,
      genre: "ELECTRONIC",
      checked: false
    },
    {
      value: 5,
      genre: "SOUL",
      checked: false
    },
    {
      value: 6,
      genre: "CLASSICAL",
      checked: false
    },
    {
      value: 7,
      genre: "JAZZ",
      checked: false
    }
  ] 


  

  chooseGenre ($event) {
  this.checkGenre.emit($event.target.value)
  }


  // chooseGenre( $event, radio){
  //   const change = $event.target.checked ? 1 : -1;
  //   this.checkGenre.emit({
  //     radio,
  //     isChecked: $event.target.checked,
  //     change
  //   })
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
