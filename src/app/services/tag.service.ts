import {Injectable} from '@angular/core';
import {DetailedImage} from '../models/Image.model';
import {UniverseService} from './universe.service';
import {AssetService} from "./asset.service";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  public getFriendImagesFromTags(matchTags: string[]): DetailedImage[] {
    return this.getImagesFromListByTags(matchTags, this.assetService.friends);
  }

  public getLocationImagesFromTags(matchTags: string[]): DetailedImage[] {
    return this.getImagesFromListByTags(matchTags, this.assetService.locations);
  }

  public get availableTags(): string[] {
    const _availableTags: string[] = [];

    this.uniqueLocationTags.forEach((locationTag) => {
      const friendExists = this.allFriendTags.some((friendTag) => {
        return friendTag === locationTag;
      });

      if (friendExists) {
        _availableTags.push(locationTag);
      }
    });

    return _availableTags;
  }

  public get uniqueLocationTags(): string[] {
    return this.findUniqueTagsFromDetailedImageList(this.assetService.locations);
  }

  public get uniqueFriendTags(): string [] {
    return this.findUniqueTagsFromDetailedImageList(this.assetService.friends);
  }

  private get allFriendTags(): string[] {
    return this.findAllTagsFromDetailedImageList(this.assetService.friends);
  }

  constructor(
    private universeService: UniverseService,
    private assetService: AssetService,
  ) {
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
