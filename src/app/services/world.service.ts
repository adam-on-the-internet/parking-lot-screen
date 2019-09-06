import { Injectable } from '@angular/core';
import { RandomHelper } from '../helpers/Random.helper';
import { FRIEND_IMAGE_LIST } from '../constants/friend.constants';
import { LOCATION_IMAGES_DECK } from '../constants/location.constants';
import { DetailedImage } from '../models/Image.model';
import { BooleanHelper } from '../helpers/Boolean.helper';
import { Song } from '../models/Song.model';
import { TagService } from './tag.service';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public name: string = null;
  public locationImageDeck: DetailedImage[] = null;
  public friendImageDeck: DetailedImage[] = null;

  private PLAYLIST: Song[] = null;
  private currentSongNumber = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.name) &&
      BooleanHelper.hasValue(this.locationImageDeck) &&
      BooleanHelper.hasValue(this.friendImageDeck);
  }

  public get songMode(): boolean {
    return BooleanHelper.hasValue(this.PLAYLIST);
  }

  constructor(
    public tagService: TagService,
  ) {}

  public setupPlaylistMode(playlist: Song[]): void {
    this.PLAYLIST = playlist;
    this.currentSongNumber = 0;
    this.setupSongWorld();
  }

  public nextSong(): void {
    this.currentSongNumber++;
    if (this.currentSongNumber >= this.PLAYLIST.length) {
      this.currentSongNumber = 0;
    };
    this.setupSongWorld();
  }

  public setupFreeMode(): void {
    this.PLAYLIST = null;
    this.setupOpenWorld();
  }

  public setupTagMode(tag: string): void {
    this.PLAYLIST = null;
    this.setupTagWorld(tag);
  }

  private setupSongWorld(): void {
    const newSong = this.PLAYLIST[this.currentSongNumber];
    this.name = newSong.name;

    const songFriends = this.tagService.getFriendImagesFromTags(newSong.tags);
    const songLocations = this.tagService.getLocationImagesFromTags(newSong.tags);

    this.setupWorld(songFriends, songLocations);
    console.log(`Setting up ${this.name}...`);
  }

  private setupTagWorld(tag: string): void {
    this.name = tag;
    
    const tagFriends = this.tagService.getFriendImagesFromTags([tag]);
    const tagLocations = this.tagService.getLocationImagesFromTags([tag]);

    this.setupWorld(tagFriends, tagLocations);
    console.log(`Setting up ${this.name}...`);
  }


  private setupOpenWorld(): void {
    this.name = "FREE MODE";
    this.setupWorld(FRIEND_IMAGE_LIST, LOCATION_IMAGES_DECK);
    console.log(`Setting up ${this.name}...`);
  }

  private setupWorld(friends: DetailedImage[], locations: DetailedImage[]): void {
    this.friendImageDeck = RandomHelper.shuffle(friends);
    this.locationImageDeck = RandomHelper.shuffle(locations);
  }
}
