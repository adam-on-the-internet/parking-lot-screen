import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/Song.model';
import { HAUNT, AUNT, LOVER, CARDIFF, ALL_SONGS } from 'src/app/constants/song.constants';

@Component({
  selector: 'app-song-gallery',
  templateUrl: './song-gallery.component.html',
  styleUrls: ['./song-gallery.component.css']
})
export class SongGalleryComponent implements OnInit {
  public songView: Song = null;

  public get songsToDisplay(): Song[] {
    return ALL_SONGS;
  }

  public get songCount(): number {
    return ALL_SONGS.length;
  }

  public setSong(song: Song): void {
    this.songView = song;
  }

  constructor() { }

  ngOnInit() {
  }

}
