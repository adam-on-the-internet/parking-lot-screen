import { Component } from '@angular/core';
import { UniverseService } from 'src/app/services/universe.service';
import { WorldService } from 'src/app/services/world.service';
import { LOVER, HAUNT, DISCLAIMER, AUNT } from 'src/app/constants/song.constants';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent {

  public get tagList(): string[] {
    return this.universeService.availableTags;
  }

  constructor(
    public worldService: WorldService,
    public universeService: UniverseService,
  ) { }

  public startFreeMode(): void {
    this.worldService.setupFreeMode();
  }

  public startPlaylistMode(): void {
    this.worldService.setupPlaylistMode([
      LOVER,
      HAUNT,
      DISCLAIMER,
      AUNT,
    ]);
  }

  public startTagMode(tag: string): void {
    this.worldService.setupTagMode(tag);
  }

}
