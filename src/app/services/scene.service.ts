import { Injectable } from '@angular/core';
import { Scene } from '../models/Scene.model';
import { WorldService } from './world.service';
import { FriendService } from './friend.service';
import { LocationService } from './location.service';

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
    private locationService: LocationService,
  ) {
  }

  public startCycle(): void {
    this.switchScene();
    setInterval(() => {
      this.switchScene();
    }, this.secondsPerScene * 1000);
  }

  public switchScene(): void {
    if (this.worldService.ready) {
      this.scene = {
        friendList: this.friendService.generateFriends(),
        location: this.locationService.generateLocation(this.scene.location.index),
      };
      this.locationService.setupLocation(this.scene.location);
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
}
