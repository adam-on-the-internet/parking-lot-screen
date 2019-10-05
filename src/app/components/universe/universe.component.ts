import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { WorldService } from 'src/app/services/world.service';
import { ALL_PLAYLISTS } from 'src/app/constants/playlist.constants';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {
  public universeReady = true;

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private worldService: WorldService,
  ) { }

  public ngOnInit() {
    this.prepareUniverse();
  }

  private prepareUniverse() {
    const mode = this.route.snapshot.paramMap.get("mode");
    if (mode === "tag") {
      this.setupTag();
    }
    if (mode === "playlist") {
      this.setupPlaylist();
    }
    if (mode === "free") {
      this.worldService.setupFreeMode();
    }
    this.universeReady = true;
  }

  private setupTag() {
    const tag = this.route.snapshot.paramMap.get("selection");
    if (tag && this.tagService.availableTags.includes(tag)) {
      this.worldService.setupTagMode(tag);
    }
  }
  private setupPlaylist() {
    const playlistKey = this.route.snapshot.paramMap.get("selection");

    const playlist = ALL_PLAYLISTS.find((pl) => {
      return pl.key.toString() === playlistKey;
    });

    if (playlist) {
      this.worldService.setupPlaylistMode(playlist);
    }
  }

}
