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
    name: "void world",
    locationImageDeck: [],
    friendImageDeck: [],
  };

  constructor() {
    this.setupWorld();
    setInterval(() => {
      this.switchScene();
    }, this.secondsPerScene * 1000);
  }

  public switchScene(): void {
    this.pickFriends();
    this.pickLocation();
    this.describeScene();
  }

  private describeScene(): void {
    console.log("Built scene with:");
    console.log(`Location: `);
    console.log(this.scene.location.image.name);
    console.log(`Friends:`);
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
    }
  }

  public pickFriends() {
    const newFriends: Friend[] = [];
    for (let i = 0; i < this.friendCount; i++) {
      const friendIndex = RandomHelper.pickRandomNumber(0, this.world.friendImageDeck.length);
      const friendImage = this.world.friendImageDeck[friendIndex];
      const friendSpeed = RandomHelper.pickRandomNumber(1, this.availableSpeeds);
      const friendAnimation = RandomHelper.pickRandomNumber(1, this.availableAnimations);
      newFriends.push({
        image: friendImage,
        speed: friendSpeed,
        animation: friendAnimation,
      });
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
