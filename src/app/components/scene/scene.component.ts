import { Component, OnInit } from '@angular/core';
import { SceneService } from 'src/app/services/scene.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  public get backgroundImage(): string {
    return `url(${this.sceneService.scene.location.image.src})`;
  }

  public get imageSource(): string {
    return this.sceneService.scene.location.image.src;
  }

  constructor(
    public sceneService: SceneService,
    public locationService: LocationService,
  ) { }

  ngOnInit() {
    this.sceneService.startCycle();
  }

}
