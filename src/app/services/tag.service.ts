import { Injectable } from '@angular/core';
import { DetailedImage } from '../models/Image.model';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';

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

  public findUniqueTagsFromDetailedImageList(imageList: DetailedImage[]): string[] {
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
