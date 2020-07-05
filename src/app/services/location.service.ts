import { Injectable } from '@angular/core';
import { SceneLocation } from '../models/Location.model';
import { WorldService } from './world.service';
import { DomHelper } from '../helpers/Dom.helper';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private worldService: WorldService,
  ) { }

  public generateLocation(currentLocationIndex: number): SceneLocation {
    let nextLocationIndex = currentLocationIndex + 1;
    if (nextLocationIndex === this.worldService.locationImageDeck.length) {
      nextLocationIndex = 0;
    }
    return {
      image: this.worldService.locationImageDeck[nextLocationIndex],
      index: nextLocationIndex,
    };
  }

  public setupLocation(location: SceneLocation): void {
    DomHelper.setBackground(location.image.src);
  }
}
