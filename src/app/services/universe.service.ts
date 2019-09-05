import { Injectable } from '@angular/core';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK as LOCATION_IMAGES_LIST } from '../constants/location.constants';
import { TagService } from './tag.service';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public friendsPerScene = 5;
  public secondsPerScene = 2;
  public availableSpeeds = 16;
  public availableAnimations = 6;

  public get availableTags(): string[] {
    const _availableTags = this.availableFriendTags;
    
    this.availableLocationTags.forEach((locationTag) => {
      if (!_availableTags.includes(locationTag)) {
        _availableTags.push(locationTag);
      }
    });
    
    return _availableTags;
  }

  private get availableLocationTags(): string[] {
    return this.tagService.findUniqueTagsFromDetailedImageList(LOCATION_IMAGES_LIST);
  }

  private get availableFriendTags(): string[] {
    return this.tagService.findUniqueTagsFromDetailedImageList(FRIEND_IMAGE_LIST);
  }

  constructor(
    private tagService: TagService,
  ) {}

}
