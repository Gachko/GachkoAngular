import { Component, OnInit } from '@angular/core';

import { Photo } from '../../models/photo.interface'
import { PhotoBlogService } from '../../services/photo-blog/photo-blog.service';

@Component({
  selector: 'app-photo-blog',
  templateUrl: './photo-blog.component.html',
  styleUrls: ['./photo-blog.component.scss'],
  providers: [ PhotoBlogService ]
})
export class PhotoBlogComponent implements OnInit {

  photos: Photo[];

  constructor( private photoBlogService: PhotoBlogService) { }

  ngOnInit(): void {
    this.photos = this.photoBlogService.getPhotos();
  }

}
