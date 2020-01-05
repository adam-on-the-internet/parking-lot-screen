import { Component } from '@angular/core';
import { Song } from 'src/app/models/Song.model';
import { ALL_SONGS_PLAYLIST } from 'src/app/constants/playlist.constants';
import { DetailedImage } from 'src/app/models/Image.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-song-gallery',
  templateUrl: './song-gallery.component.html',
  styleUrls: ['./song-gallery.component.css']
})
export class SongGalleryComponent {
  public songView: Song = null;

  public get songsToDisplay(): Song[] {
    return ALL_SONGS_PLAYLIST.songs;
  }

  public get songCount(): number {
    return ALL_SONGS_PLAYLIST.songs.length;
  }

  public get songLocations(): DetailedImage[] {
    if (!this.songView) {
      return [];
    }
    return this.tagService.getLocationImagesFromTags(this.songView.tags);
  }

  public get songFriends(): DetailedImage[] {
    if (!this.songView) {
      return [];
    }
    return this.tagService.getFriendImagesFromTags(this.songView.tags);
  }

  constructor(
    private tagService: TagService,
  ) { }

  public setSong(song: Song): void {
    this.songView = song;
  }

}
