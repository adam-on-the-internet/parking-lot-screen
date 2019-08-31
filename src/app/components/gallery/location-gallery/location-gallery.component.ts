import { Component } from '@angular/core';
import { DetailedImage } from 'src/app/models/Image.model';
import { LOCATION_IMAGES_DECK } from 'src/app/constants/location.constants';

@Component({
  selector: 'app-location-gallery',
  templateUrl: './location-gallery.component.html',
  styleUrls: ['./location-gallery.component.css']
})
export class LocationGalleryComponent {
  public locationImageList: DetailedImage[] = LOCATION_IMAGES_DECK;
}
