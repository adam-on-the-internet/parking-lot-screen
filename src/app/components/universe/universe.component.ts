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
  private mode: string;
  private selection: string;

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private worldService: WorldService,
  ) {}

  public ngOnInit() {
    this.grabTags();
    this.prepareUniverse();
  }

  private grabTags() {
    this.mode = this.route.snapshot.paramMap.get("mode");
    this.selection = this.route.snapshot.paramMap.get("selection");
  }

  private prepareUniverse() {
    this.universeReady = false;
    if (this.mode === "tag") {
      this.setupTag();
    }
    if (this.mode === "playlist") {
      this.setupPlaylist();
    }
    if (this.mode === "free") {
      this.worldService.setupFreeMode();
    }
    this.universeReady = true;
  }

  private setupTag() {
    if (this.selection && this.tagService.availableTags.includes(this.selection)) {
      this.worldService.setupTagMode(this.selection);
    }
  }
  private setupPlaylist() {
    const playlist = ALL_PLAYLISTS.find((pl) => {
      return pl.key.toString() === this.selection;
    });

    if (playlist) {
      this.worldService.setupPlaylistMode(playlist);
    }
  }

}
