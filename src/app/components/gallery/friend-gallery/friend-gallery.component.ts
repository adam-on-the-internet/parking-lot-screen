import {Component} from '@angular/core';
import {DetailedImage} from 'src/app/models/Image.model';
import {TagService} from 'src/app/services/tag.service';
import {AssetService} from "../../../services/asset.service";

@Component({
  selector: 'app-friend-gallery',
  templateUrl: './friend-gallery.component.html',
  styleUrls: ['./friend-gallery.component.css']
})
export class FriendGalleryComponent {
  public filterTag = "";

  public get friendCount(): number {
    return this.assetService.friends.length;
  }

  public get friendsToDisplay(): DetailedImage[] {
    if (this.filterTag === "") {
      return this.assetService.friends;
    }
    return this.assetService.friends.filter((friend) => {
      return friend.tags.includes(this.filterTag);
    })
  }

  public get tags(): string[] {
    return this.tagService.uniqueFriendTags;
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
