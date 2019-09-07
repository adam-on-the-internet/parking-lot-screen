import { Component } from '@angular/core';
import { UniverseService } from 'src/app/services/universe.service';
import { WorldService } from 'src/app/services/world.service';
import { TagService } from 'src/app/services/tag.service';
import { AVAILABLE_PLAYLISTS } from 'src/app/constants/playlist.constants';
import { Playlist } from 'src/app/models/Playlist.model';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent {
  public availablePlaylists = AVAILABLE_PLAYLISTS;

  public get tagList(): string[] {
    return this.tagService.availableTags;
  }

  constructor(
    public worldService: WorldService,
    public universeService: UniverseService,
    private tagService: TagService,
  ) { }

  public startFreeMode(): void {
    this.worldService.setupFreeMode();
  }

  public startPlaylistMode(playlist: Playlist): void {
    this.worldService.setupPlaylistMode(playlist);
  }

  public startTagMode(tag: string): void {
    this.worldService.setupTagMode(tag);
  }

}
