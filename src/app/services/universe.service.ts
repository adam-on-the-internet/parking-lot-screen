import { Injectable } from '@angular/core';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { DetailedImage } from '../models/Image.model';
import { LOCATION_IMAGES_DECK as LOCATION_IMAGES_LIST } from '../constants/location.constants';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public friendsPerScene = 5;
  public secondsPerScene = 2;
  public availableSpeeds = 16;
  public availableAnimations = 6;

  public get availableTags(): string[] {
    return this.availableLocationTags.concat(this.availableFriendTags);
  }

  private get availableLocationTags(): string[] {
    return this.tagsFromImages(LOCATION_IMAGES_LIST);
  }

  private get availableFriendTags(): string[] {
    return this.tagsFromImages(FRIEND_IMAGE_LIST);
  }

  private tagsFromImages(images: DetailedImage[]): string[] {
    const imageTags: string[] = [];
    images.forEach((image) => {
      image.tags.forEach((tag) => {
        imageTags.push(tag);
      });
    });
    return imageTags;
  }
}
