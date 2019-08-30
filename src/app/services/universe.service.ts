import { Injectable } from '@angular/core';
import { Friend, FriendImage } from '../models/Friend.model';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { RandomHelper } from '../helpers/Random.helper';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public debugMode = true;
  public friendCount = 2;

  public currentFriends: Friend[] = [];
  public currentFriendImageDeck: FriendImage[] = [];

  constructor() { }

  public pickFriends() {
    this.currentFriendImageDeck = RandomHelper.shuffle(FRIEND_IMAGE_LIST);

    const newFriends: Friend[] = [];
    for (let i = 0; i < this.friendCount; i++) {

      const friendImage = this.currentFriendImageDeck[i];
      const friendSpeed = 1;
      const friendAnimation = 1;
      newFriends.push({
        image: friendImage,
        speed: friendSpeed,
        animation: friendAnimation,
      });
    }

    this.currentFriends = newFriends;
  }
}
