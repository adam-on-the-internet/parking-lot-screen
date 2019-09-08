import { Component } from '@angular/core';
import { DetailedImage } from 'src/app/models/Image.model';
import { FRIEND_IMAGE_LIST } from 'src/app/constants/friend.constants';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-friend-gallery',
  templateUrl: './friend-gallery.component.html',
  styleUrls: ['./friend-gallery.component.css']
})
export class FriendGalleryComponent {
  public filterTag = "";

  public get friendCount(): number {
    return FRIEND_IMAGE_LIST.length;
  }

  public get friendsToDisplay(): DetailedImage[] {
    if (this.filterTag === "") {
      return FRIEND_IMAGE_LIST;
    }
    return FRIEND_IMAGE_LIST.filter((friend) => {
      return friend.tags.includes(this.filterTag);
    })
  }

  public get tags(): string[] {
    return this.tagService.uniqueFriendTags;
  }

  constructor(
    private tagService: TagService,
  ){}

  public setFilter(tag: string): void {
    this.filterTag = tag;
  }
}
