import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  @Input()
  dog!: Dog;

  @Output()
  onBark = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get altText() {
    return `Image of ${this.dog.name}`;
  }
}
