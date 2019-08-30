import { Component, OnInit, Input } from '@angular/core';
import { UniverseService } from 'src/app/services/universe.service';
import { Friend } from 'src/app/models/Friend.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  @Input() public friend: Friend;

  public speed;
  public animation;
  public ready = false;

  constructor(
    public universeService: UniverseService,
  ) { }

  ngOnInit() {
    this.speed = 1;
    this.animation = 1;
    this.ready = true;
  }

}
