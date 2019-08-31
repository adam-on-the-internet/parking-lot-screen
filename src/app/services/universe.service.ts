import { Injectable } from '@angular/core';
import { Friend } from '../models/Friend.model';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { RandomHelper } from '../helpers/Random.helper';
import { DomHelper } from '../helpers/Dom.helper';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';
import { Scene } from '../models/Scene.model';
import { World } from '../models/World.model';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public friendCount = 5;
  public secondsPerScene = 2;

  public availableSpeeds = 16;
  public availableAnimations = 6;

  public scene: Scene = {
    location: {
      index: 0,
      image: null,
    },
    friendList: [],
  };

  public world: World = {
    name: null,
    locationImageDeck: [],
    friendImageDeck: [],
  };

  constructor() {
    setInterval(() => {
      this.switchScene();
    }, this.secondsPerScene * 1000);
  }

  public switchScene(): void {
    if (this.world.name !== null) {
      this.pickFriends();
      this.pickLocation();
      this.describeScene();
    }
  }

  private describeScene(): void {
    console.log("SCENE");
    console.log(`@`);
    console.log(this.scene.location.image.name);
    console.log(`w/`);
    this.scene.friendList.forEach((friend) => {
      console.log(`${friend.image.name}`);
    });
    console.log("-----");
  }

  public setupWorld(): void {
    this.setupOpenWorld();
  }

  public setupOpenWorld(): void {
    this.world = {
      name: "Open World",
      friendImageDeck: RandomHelper.shuffle(FRIEND_IMAGE_LIST),
      locationImageDeck: RandomHelper.shuffle(LOCATION_IMAGES_DECK),
    };
  }

  public pickFriends() {
    const newFriends: Friend[] = [];
    console.log("picking friends");

    for (let i = 0; i < this.friendCount; i++) {
      let friendIndex = RandomHelper.pickRandomNumber(0, this.world.friendImageDeck.length);

      const friendToAdd: Friend = {
        image: this.world.friendImageDeck[friendIndex],
        speed: RandomHelper.pickRandomNumber(1, this.availableSpeeds),
        animation: RandomHelper.pickRandomNumber(1, this.availableAnimations),
      };

      let duplicatePossible = true;
      while (duplicatePossible) {
        console.log(duplicatePossible);
        const duplicateFriend = newFriends.some((friend) => {
          return friend.image.src === friendToAdd.image.src;
        });
        if (duplicateFriend === undefined) {
          duplicatePossible = false;
        } else {
          friendIndex++;
          if (friendIndex === this.world.friendImageDeck.length) {
            friendIndex = 0;
          }
          friendToAdd.image = this.world.friendImageDeck[friendIndex];
        }
      }

      newFriends.push(friendToAdd);
    }

    this.scene.friendList = newFriends;
  }

  public pickLocation() {
    let nextLocationIndex = this.scene.location.index + 1;
    if (nextLocationIndex === this.world.locationImageDeck.length) {
      nextLocationIndex = 0;
    }
    this.scene.location = {
      image: this.world.locationImageDeck[nextLocationIndex],
      index: nextLocationIndex,
    };
    DomHelper.setBackground("assets/locations/" + this.scene.location.image.src);
  }
}
