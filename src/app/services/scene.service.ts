import { Injectable } from '@angular/core';
import { Scene } from '../models/Scene.model';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  public scene: Scene = {
    location: {
      index: 0,
      image: null,
    },
    friendList: [],
  };

  constructor() { }
}
