import { Injectable } from '@angular/core';
import { Friend } from '../models/Friend.model';

@Injectable({
  providedIn: 'root'
})
export class UniverseService {
  public debugMode = true;

  public currentFriends: Friend = [
    {
      image: {
        name: "Wario and Waluigi Kart 1",
        src: "assets/friends/friend1.png",
      },
      animation: 1,
      speed: 1,
    },
    {
      image: {
        name: "Wario and Waluigi Kart 2",
        src: "assets/friends/friend1.png",
      },
      animation: 2,
      speed: 2,
    },
  ];

  constructor() { }
}
