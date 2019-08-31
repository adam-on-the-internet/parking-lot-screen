import { Injectable } from '@angular/core';
import { RandomHelper } from '../helpers/Random.helper';
import { Friend } from '../models/Friend.model';
import { AVAILABLE_SPEEDS } from '../constants/speed.constants';
import { AVAILABLE_ANIMATIONS } from '../constants/animation.constants';
import { WorldService } from './world.service';
import { World } from '../models/World.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  public get world(): World {
    return this.worldService.world;
  }

  constructor(
    private worldService: WorldService,
  ) { }

  public generateFriends(friendCount: number): Friend[] {
    const newFriends: Friend[] = [];

    const newFriendImageIndexes = RandomHelper.pickMultipleRandomUniqueNumbers(0, this.world.friendImageDeck.length, friendCount);

    newFriendImageIndexes.forEach((friendImageIndex) => {
      const friendToAdd: Friend = {
        image: this.world.friendImageDeck[friendImageIndex],
        speed: RandomHelper.pickRandomNumber(1, AVAILABLE_SPEEDS),
        animation: RandomHelper.pickRandomNumber(1, AVAILABLE_ANIMATIONS),
      };

      newFriends.push(friendToAdd);
    });

    return newFriends;
  }

}
