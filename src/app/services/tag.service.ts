import { Injectable } from '@angular/core';
import { DetailedImage } from '../models/Image.model';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';
import { UniverseService } from './universe.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  public getFriendImagesFromTags(matchTags: string[]): DetailedImage[] {
    return this.getImagesFromListByTags(matchTags, FRIEND_IMAGE_LIST);
  }

  public getLocationImagesFromTags(matchTags: string[]): DetailedImage[] {
    return this.getImagesFromListByTags(matchTags, LOCATION_IMAGES_DECK);
  }

  public get availableTags(): string[] {
    const _availableTags: string[] = [];
    const requiredFriends = this.universeService.friendsPerScene;
    
    this.uniqueLocationTags.forEach((locationTag) => {
      const matchingFriends = this.allFriendTags.filter((friendTag) => {
        return friendTag === locationTag;
      });

      if (matchingFriends.length >= requiredFriends) {
        _availableTags.push(locationTag);
      }
    });

    return _availableTags;
  }

  private get uniqueLocationTags(): string[] {
    return this.findUniqueTagsFromDetailedImageList(LOCATION_IMAGES_DECK);
  }

  private get allFriendTags(): string[] {
    return this.findAllTagsFromDetailedImageList(FRIEND_IMAGE_LIST);
  }

  constructor(
    private universeService: UniverseService,
  ){}


  private getImagesFromListByTags(matchTags: string[], imageList: DetailedImage[]): DetailedImage[] {
    if (matchTags.length === 0) {
      return imageList;
    }
    
    return imageList.filter((image) => {
      return image.tags.some((imageTag) => {
        return matchTags.includes(imageTag);
      });
    });
  }

  private findAllTagsFromDetailedImageList(imageList: DetailedImage[]): string[] {
    const imageTags: string[] = [];
    imageList.forEach((image) => {
      image.tags.forEach((tag) => {
        imageTags.push(tag);
      });
    });
    return imageTags;
  }

  private findUniqueTagsFromDetailedImageList(imageList: DetailedImage[]): string[] {
    const imageTags: string[] = [];
    imageList.forEach((image) => {
      image.tags.forEach((tag) => {
        if (!imageTags.includes(tag)) {
          imageTags.push(tag);
        }
      });
    });
    return imageTags;
  }
}
