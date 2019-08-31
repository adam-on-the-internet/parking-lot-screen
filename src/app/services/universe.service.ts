import { Injectable } from '@angular/core';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { RandomHelper } from '../helpers/Random.helper';
import { DomHelper } from '../helpers/Dom.helper';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';
import { FriendService } from './friend.service';
import { WorldService } from './world.service';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public friendCount = 5;
  public secondsPerScene = 2;

  constructor(
    private friendService: FriendService,
    private worldService: WorldService,
    private sceneService: SceneService,
  ) {
    setInterval(() => {
      this.switchScene();
    }, this.secondsPerScene * 1000);
  }

  public switchScene(): void {
    if (this.worldService.world.name !== null) {
      this.pickFriends();
      this.pickLocation();
      this.describeScene();
    }
  }

  private describeScene(): void {
    console.log("SCENE");
    console.log(`@`);
    console.log(this.sceneService.scene.location.image.name);
    console.log(`w/`);
    this.sceneService.scene.friendList.forEach((friend) => {
      console.log(`${friend.image.name}`);
    });
    console.log("-----");
  }

  public setupWorld(): void {
    console.log("Setting up world...");
    this.setupOpenWorld();
  }

  public setupOpenWorld(): void {
    this.worldService.world = {
      name: "Open World",
      friendImageDeck: RandomHelper.shuffle(FRIEND_IMAGE_LIST),
      locationImageDeck: RandomHelper.shuffle(LOCATION_IMAGES_DECK),
    };
  }

  public pickFriends() {
    this.sceneService.scene.friendList = this.friendService.generateFriends(this.friendCount);
  }

  public pickLocation() {
    let nextLocationIndex = this.sceneService.scene.location.index + 1;
    if (nextLocationIndex === this.worldService.world.locationImageDeck.length) {
      nextLocationIndex = 0;
    }
    this.sceneService.scene.location = {
      image: this.worldService.world.locationImageDeck[nextLocationIndex],
      index: nextLocationIndex,
    };
    DomHelper.setBackground("assets/locations/" + this.sceneService.scene.location.image.src);
  }
}
