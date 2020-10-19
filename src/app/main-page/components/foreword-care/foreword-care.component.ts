import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreword-care',
  templateUrl: './foreword-care.component.html',
  styleUrls: ['./foreword-care.component.scss']
})
export class ForewordCareComponent implements OnInit {

  text = `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit. Fusce feugiat 
  egestas rhoncus. Nunc pulvinar feugiat ex,
  vel feugiat purus `;
  
  pathToImg = '../../../../assets/man.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
