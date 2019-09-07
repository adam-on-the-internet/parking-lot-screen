import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() public popUpId = "pop-up";
  @Input() public buttonText = "Details";

  public pop(): void {
    const popup = document.getElementById(this.popUpId);
    popup.classList.toggle("show");
  }
}
