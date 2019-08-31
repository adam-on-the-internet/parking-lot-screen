import { Component } from '@angular/core';
import { DetailedImage } from 'src/app/models/Image.model';
import { FRIEND_IMAGE_LIST } from 'src/app/constants/friend.constants';

@Component({
  selector: 'app-friend-gallery',
  templateUrl: './friend-gallery.component.html',
  styleUrls: ['./friend-gallery.component.css']
})
export class FriendGalleryComponent {
  public friendImageList: DetailedImage[] = FRIEND_IMAGE_LIST;
}
