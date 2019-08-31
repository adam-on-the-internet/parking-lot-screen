import { Component } from '@angular/core';
import { WorldService } from 'src/app/services/world.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  constructor(
    public worldService: WorldService,
  ) { }
}
