import { Component } from '@angular/core'
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [NgFor]
})
export class GalleryComponent {
  images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
    '/assets/6.jpg',
    '/assets/7.jpg',
    '/assets/8.jpg',
  ]
}
