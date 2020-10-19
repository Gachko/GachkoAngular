import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-item',
  templateUrl: './care-item.component.html',
  styleUrls: ['./care-item.component.scss']
})
export class CareItemComponent implements OnInit {

  itemNumber =1 ;
  itemTitle = 'ff';
  itemText = 'ggg';
  itemPhoto = '../';

  constructor() { }

  ngOnInit(): void {
  }

}
