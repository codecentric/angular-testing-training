import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-submitbutton',
  templateUrl: './submitbutton.component.html',
  styleUrls: ['./submitbutton.component.css']
})
export class SubmitbuttonComponent {
  @Input()
  text!: string;

  @Output()
  clicked = new EventEmitter<void>();

}
