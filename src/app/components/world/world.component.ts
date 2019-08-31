import { Component } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  public get worldReady(): boolean {
    return this.worldService.ready;
  }

  public get tagList(): string[] {
    return [];
  }

  constructor(
    public worldService: WorldService,
  ) { }
}
