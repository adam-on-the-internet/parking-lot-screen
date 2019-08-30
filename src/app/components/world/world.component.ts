import { Component, OnInit } from '@angular/core';
import { UniverseService } from 'src/app/services/universe.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  Arr = Array;
  num: number = 20;

  constructor(
    public universeService: UniverseService,
  ) { }

  ngOnInit() {
  }

  public changeBackground() {
    document.body.style.backgroundImage = `url("assets/3.jpg")`;
  }
}
