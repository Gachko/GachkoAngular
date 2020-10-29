import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, OnInit } from '@angular/core';

import { CareItemsService } from '../../services/careItems.service';
import { CareItemComponent } from '../../components/care-item/care-item.component';
import { CareItem } from '../../models/careItem.interface'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-care-blog',
  providers: [ CareItemsService ],
  templateUrl: './care-blog.component.html',
  styleUrls: ['./care-blog.component.scss']
})
export class CareBlogComponent implements OnInit, AfterContentInit {

  items: CareItem[];

  @ViewChild('item', { read: ViewContainerRef, static: true }) item: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,
              private careService: CareItemsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = this.careService.getItems();
  }

  ngAfterContentInit() {

    const itemFormFactory = this.resolver.resolveComponentFactory(CareItemComponent);

    for (let i = 0; i < this.items.length; i++) {
      const component = this.item.createComponent(itemFormFactory, i);
      component.instance.itemNumber = this.items[i].num;
      component.instance.itemTitle = this.items[i].title;
      component.instance.itemText = this.items[i].text;
      component.instance.itemPhoto = this.items[i].src;
    }

  }

}
