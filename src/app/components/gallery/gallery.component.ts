import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public mode = "";

  public get modeNotSet(): boolean {
    return !this.friendMode && !this.locationMode && !this.songMode;
  }

  public get friendMode(): boolean {
    return this.mode === "FRIEND";
  }

  public get locationMode(): boolean {
    return this.mode === "LOCATION";
  }

  public get songMode(): boolean {
    return this.mode === "SONG";
  }

  public setMode(mode: string): void {
    this.mode = mode;
  }

}
