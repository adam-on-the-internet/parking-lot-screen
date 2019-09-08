import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-gallery',
  templateUrl: './song-gallery.component.html',
  styleUrls: ['./song-gallery.component.css']
})
export class SongGalleryComponent implements OnInit {

  public get songCount(): number {
    return 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
