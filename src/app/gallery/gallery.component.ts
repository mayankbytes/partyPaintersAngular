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
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: '../../assets/wedding.jpeg', alt: 'Description for Image 2', title: 'Title 2' });
  }

}
