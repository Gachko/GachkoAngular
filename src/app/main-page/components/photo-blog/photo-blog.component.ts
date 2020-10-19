import { Component, OnInit } from '@angular/core';

import { IPhoto } from '../../models/photo.interface'

import { PhotoBlogService } from '../../services/photo-blog.service';

@Component({
  selector: 'app-photo-blog',
  templateUrl: './photo-blog.component.html',
  styleUrls: ['./photo-blog.component.scss']
})
export class PhotoBlogComponent implements OnInit {

  photos: IPhoto[];

  constructor( private photoBlogService: PhotoBlogService) { }

  ngOnInit(): void {
    this.photos = this.photoBlogService.getPhotos();
  }

}
