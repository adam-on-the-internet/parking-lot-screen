import { Injectable } from '@angular/core';
import { RandomHelper } from '../helpers/Random.helper';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';
import { DetailedImage } from '../models/Image.model';
import { BooleanHelper } from '../helpers/Boolean.helper';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public name: string = null;
  public locationImageDeck: DetailedImage[] = null;
  public friendImageDeck: DetailedImage[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.name) &&
      BooleanHelper.hasValue(this.locationImageDeck) &&
      BooleanHelper.hasValue(this.friendImageDeck);
  }

  public setupWorld(): void {
    this.setupOpenWorld();
  }

  public setupOpenWorld(): void {
    this.name = "Open World";
    this.friendImageDeck = RandomHelper.shuffle(FRIEND_IMAGE_LIST);
    this.locationImageDeck = RandomHelper.shuffle(LOCATION_IMAGES_DECK);
    console.log(`Setting up ${this.name}...`);
  }
}
