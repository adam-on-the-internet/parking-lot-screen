import { Injectable } from '@angular/core';
import { Scene } from '../models/Scene.model';
import { WorldService } from './world.service';
import { DomHelper } from '../helpers/Dom.helper';
import { FriendService } from './friend.service';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  private secondsPerScene = 2;

  public scene: Scene = {
    location: {
      index: 0,
      image: null,
    },
    friendList: [],
  };

  constructor(
    private worldService: WorldService,
    private friendService: FriendService,
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
    console.log(this.scene.location.image.name);
    console.log(`w/`);
    this.scene.friendList.forEach((friend) => {
      console.log(`${friend.image.name}`);
    });
    console.log("-----");
  }

  public pickFriends() {
    this.scene.friendList = this.friendService.generateFriends();
  }

  public pickLocation() {
    let nextLocationIndex = this.scene.location.index + 1;
    if (nextLocationIndex === this.worldService.world.locationImageDeck.length) {
      nextLocationIndex = 0;
    }
    this.scene.location = {
      image: this.worldService.world.locationImageDeck[nextLocationIndex],
      index: nextLocationIndex,
    };
    DomHelper.setBackground("assets/locations/" + this.scene.location.image.src);
  }
}
