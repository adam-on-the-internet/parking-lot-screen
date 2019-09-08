import { Component } from '@angular/core';
import { DetailedImage } from 'src/app/models/Image.model';
import { LOCATION_IMAGES_DECK } from 'src/app/constants/location.constants';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-location-gallery',
  templateUrl: './location-gallery.component.html',
  styleUrls: ['./location-gallery.component.css']
})
export class LocationGalleryComponent {
  public filterTag = "";

  public get locationCount(): number {
    return LOCATION_IMAGES_DECK.length;
  }

  public get locationsToDisplay(): DetailedImage[] {
    if (this.filterTag === "") {
      return LOCATION_IMAGES_DECK;
    }
    return LOCATION_IMAGES_DECK.filter((location) => {
      return location.tags.includes(this.filterTag);
    })
  }

  public get tags(): string[] {
    return this.tagService.uniqueLocationTags;
  }

  constructor(
    private tagService: TagService,
  ){}

  public setFilter(tag: string): void {
    this.filterTag = tag;
  }
}
