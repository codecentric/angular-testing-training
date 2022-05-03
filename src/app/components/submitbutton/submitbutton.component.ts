import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submitbutton',
  templateUrl: './submitbutton.component.html',
  styleUrls: ['./submitbutton.component.css'],
})
export class SubmitbuttonComponent {
  @Input()
  text!: string;

  @Input()
  disabled = false;

  @Output()
  clicked = new EventEmitter<void>();
}
