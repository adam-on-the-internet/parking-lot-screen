import { Injectable } from '@angular/core';
import { DetailedImage } from '../models/Image.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

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
