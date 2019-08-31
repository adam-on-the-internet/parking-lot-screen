import { Injectable } from '@angular/core';
import { World } from '../models/World.model';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public world: World = {
    name: null,
    locationImageDeck: [],
    friendImageDeck: [],
  };

  constructor() { }
}
