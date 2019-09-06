import { Component } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';
import { SceneService } from 'src/app/services/scene.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  
  public get worldReady(): boolean {
    return this.worldService.ready;
  }

  public get worldName(): string {
    return this.worldService.name;
  }

  constructor(
    public worldService: WorldService,
    private sceneService: SceneService,
  ) { }

  public nextSong(): void {
    this.worldService.nextSong();
    this.sceneService.switchScene();
  }
}
