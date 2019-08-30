import { Component, OnInit } from '@angular/core';
import { UniverseService } from 'src/app/services/universe.service';
import { Friend } from 'src/app/models/Friend.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  public friendCode;
  public speed;
  public animation;
  public friend: Friend;
  public src: string;
  public ready = false;

  constructor(
    public universeService: UniverseService,
  ) { }

  ngOnInit() {
    this.friendCode = 1;
    this.speed = 1;
    this.animation = 1;
    this.friend = this.universeService.getFriendByCode(this.friendCode);
    this.src = this.friend.src;
    this.ready = true;
  }

}
