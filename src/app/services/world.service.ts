import { Injectable } from '@angular/core';
import { World } from '../models/World.model';
import { RandomHelper } from '../helpers/Random.helper';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public world: World = {
    name: null,
    locationImageDeck: [],
    friendImageDeck: [],
  };

  constructor() {
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
    console.log(`Setting up ${this.world.name}...`);
  }
}
