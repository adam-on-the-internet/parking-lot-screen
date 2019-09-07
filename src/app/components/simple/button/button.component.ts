import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() click = new EventEmitter<any>();
  @Input() minor = false;

  public onClick() {
      this.click.emit();
  }
}
