import { Component, OnInit } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';
import { SceneService } from 'src/app/services/scene.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  public get worldReady(): boolean {
    return this.worldService.ready;
  }

  public get worldName(): string {
    return this.worldService.name;
  }

  constructor(
    public worldService: WorldService,
    private sceneService: SceneService,
    private router: Router,
  ) { }

  public ngOnInit() {
    if (!this.worldReady) {
      console.log("world not ready...");
      this.router.navigate(["/start-menu"]);
    }
  }

  public nextSong(): void {
    if (this.worldService.songMode) {
      this.worldService.nextSong();
      this.sceneService.switchScene();
    }
  }
}
