import { Component } from '@angular/core';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent {
  public mode = "";

  public get modeNotSet(): boolean {
    return !this.showMode && !this.galleryMode;
  }

  public get showMode(): boolean {
    return this.mode === "SHOW";
  }

  public get galleryMode(): boolean {
    return this.mode === "GALLERY";
  }

  public setMode(mode: string): void {
    this.mode = mode;
  }

}
