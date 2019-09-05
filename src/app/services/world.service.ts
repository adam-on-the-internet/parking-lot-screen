import { Injectable } from '@angular/core';
import { RandomHelper } from '../helpers/Random.helper';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';
import { DetailedImage } from '../models/Image.model';
import { BooleanHelper } from '../helpers/Boolean.helper';
import { Song } from '../models/Song.model';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public name: string = null;
  public locationImageDeck: DetailedImage[] = null;
  public friendImageDeck: DetailedImage[] = null;

  private PLAYLIST: Song[] = null;
  private currentSong = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.name) &&
      BooleanHelper.hasValue(this.locationImageDeck) &&
      BooleanHelper.hasValue(this.friendImageDeck);
  }

  public get songMode(): boolean {
    return BooleanHelper.hasValue(this.PLAYLIST);
  }

  public setupPlaylistMode(playlist: Song[]): void {
    this.PLAYLIST = playlist;
    this.currentSong = 0;
    this.setupSongWorld();
  }

  public nextSong(): void {
    this.currentSong++;
    if (this.currentSong >= this.PLAYLIST.length) {
      this.currentSong = 0;
    };
    this.setupSongWorld();
  }

  public setupFreeMode(): void {
    this.PLAYLIST = null;
    this.setupOpenWorld();
  }

  private setupSongWorld(): void {
    const newSong = this.PLAYLIST[this.currentSong];
    this.name = newSong.name;
    // TODO parse by tag
    this.friendImageDeck = RandomHelper.shuffle(FRIEND_IMAGE_LIST);
    this.locationImageDeck = RandomHelper.shuffle(LOCATION_IMAGES_DECK);
    console.log(`Setting up ${this.name}...`);
  }

  private setupTagWorld(tag: string): void {
    this.name = tag;
    // TODO parse by tag
    this.friendImageDeck = RandomHelper.shuffle(FRIEND_IMAGE_LIST);
    this.locationImageDeck = RandomHelper.shuffle(LOCATION_IMAGES_DECK);
    console.log(`Setting up ${this.name}...`);
  }


  private setupOpenWorld(): void {
    this.name = "FREE MODE";
    this.friendImageDeck = RandomHelper.shuffle(FRIEND_IMAGE_LIST);
    this.locationImageDeck = RandomHelper.shuffle(LOCATION_IMAGES_DECK);
    console.log(`Setting up ${this.name}...`);
  }
}
