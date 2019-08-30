import { Injectable } from '@angular/core';
import { Friend } from '../models/Friend.model';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public debugMode = true;

  private currentFriendDeck: Friend[] = [
    {
      name: "Wario and Waluigi Cart",
      src: "assets/friends/friend1.png",
    },
    {
      name: "Wario and Waluigi Cart",
      src: "assets/friends/friend1.png",
    }
  ];

  constructor() { }

  public getFriendByCode(friendCode: number): Friend {
    return this.currentFriendDeck[friendCode];
  }
}
