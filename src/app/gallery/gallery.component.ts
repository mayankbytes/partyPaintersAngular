import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({ source: '../../assets/gallery/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/3.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/4.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/5.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/6.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/7.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/8.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/9.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/10.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/11.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/12.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/13.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/gallery/14.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gallery/15.jpg', alt: 'Description for Image 1', title: 'Title 1' });
  }

}
