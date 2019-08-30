import { Injectable } from '@angular/core';
import { Friend, FriendImage } from '../models/Friend.model';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { RandomHelper } from '../helpers/Random.helper';
import { DomHelper } from '../helpers/Dom.helper';
import { LOCATIONS_DECK } from '../constants/location.constants';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public debugMode = true;
  public friendCount = 2;
  public secondsPerScene = 2;

  public availableSpeeds = 16;
  public availableAnimations = 6;

  public currentFriends: Friend[] = [];
  public currentFriendImageDeck: FriendImage[] = [];

  public currentLocation;
  public currentLocationDeck: string[] = [];

  constructor() {
    setInterval(() => {
      this.pickFriends();
      this.pickBackground();
    }, this.secondsPerScene * 1000);
  }

  public pickFriends() {
    this.currentFriendImageDeck = RandomHelper.shuffle(FRIEND_IMAGE_LIST);

    const newFriends: Friend[] = [];
    for (let i = 0; i < this.friendCount; i++) {

      const friendImage = this.currentFriendImageDeck[i];
      const friendSpeed = RandomHelper.pickRandomNumber(1, this.availableSpeeds);
      const friendAnimation = RandomHelper.pickRandomNumber(1, this.availableAnimations);
      newFriends.push({
        image: friendImage,
        speed: friendSpeed,
        animation: friendAnimation,
      });
    }

    this.currentFriends = newFriends;
  }

  public pickBackground() {
    this.currentLocationDeck = RandomHelper.shuffle(LOCATIONS_DECK);
    this.currentLocation = "assets/locations/" + this.currentLocationDeck[0];
    DomHelper.setBackground(this.currentLocation);
  }
}
