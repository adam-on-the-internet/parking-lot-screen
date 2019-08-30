import { Component, OnInit } from '@angular/core';
import { UniverseService } from 'src/app/services/universe.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  constructor(
    public universeService: UniverseService,
  ) { }

  ngOnInit() {
  }
}
