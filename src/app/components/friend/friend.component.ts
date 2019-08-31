import { Component, Input } from '@angular/core';
import { Friend } from 'src/app/models/Friend.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  @Input() public friend: Friend;

  public get animationClass(): string {
    return `animation-${this.friend.animation}`;
  }

  public get speedClass(): string {
    return `speed-${this.friend.speed}`;
  }

}
