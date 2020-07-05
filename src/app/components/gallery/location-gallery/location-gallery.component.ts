import {Component} from '@angular/core';
import {DetailedImage} from 'src/app/models/Image.model';
import {TagService} from 'src/app/services/tag.service';
import {AssetService} from "../../../services/asset.service";

@Component({
  selector: 'app-location-gallery',
  templateUrl: './location-gallery.component.html',
  styleUrls: ['./location-gallery.component.css']
})
export class LocationGalleryComponent {
  public filterTag = "";

  public get locationCount(): number {
    return this.assetService.locations.length;
  }

  public get locationsToDisplay(): DetailedImage[] {
    if (this.filterTag === "") {
      return this.assetService.locations;
    }
    return this.assetService.locations.filter((location) => {
      return location.tags.includes(this.filterTag);
    })
  }

  public get tags(): string[] {
    return this.tagService.uniqueLocationTags;
  }

  constructor(
    private tagService: TagService,
    private assetService: AssetService,
  ) {
  }

  public setFilter(tag: string): void {
    this.filterTag = tag;
  }
}
