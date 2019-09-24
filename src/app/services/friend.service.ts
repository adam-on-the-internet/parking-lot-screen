import { Injectable } from '@angular/core';
import { RandomHelper } from '../helpers/Random.helper';
import { Friend } from '../models/Friend.model';
import { WorldService } from './world.service';
import { UniverseService } from './universe.service';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private get availableFriends(): number {
    return this.worldService.friendImageDeck.length;
  }

  constructor(
    private worldService: WorldService,
    private universeService: UniverseService,
  ) { }

  public generateFriends(friendCount: number): Friend[] {
    const newFriends: Friend[] = [];

    const newFriendImageIndexes = 
    RandomHelper.pickMultipleRandomUniqueNumbers(0, this.availableFriends, friendCount);

    newFriendImageIndexes.forEach((friendImageIndex) => {
      const friendToAdd: Friend = {
        image: this.worldService.friendImageDeck[friendImageIndex],
        speed: RandomHelper.pickRandomNumber(1, this.universeService.availableSpeeds),
        animation: RandomHelper.pickRandomNumber(1, this.universeService.availableAnimations),
      };
      newFriends.push(friendToAdd);
    });

    return newFriends;
  }

}
