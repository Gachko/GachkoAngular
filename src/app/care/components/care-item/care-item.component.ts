import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-item',
  templateUrl: './care-item.component.html',
  styleUrls: ['./care-item.component.scss']
})
export class CareItemComponent implements OnInit {

  itemNumber: number ;
  itemTitle: string;
  itemText: string;
  itemPhoto: string;

  constructor() { }

  ngOnInit(): void {
  }

}
