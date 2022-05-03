import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-more-chars-buttonset',
  templateUrl: './more-chars-buttonset.component.html',
  styleUrls: ['./more-chars-buttonset.component.css'],
})
export class MoreCharsButtonsetComponent {
  @Input()
  info!: Info;

  @Output()
  fetchPrev = new EventEmitter();

  @Output()
  fetchNext = new EventEmitter();

  get nextLink() {
    return this.info?.next;
  }

  get prevLink() {
    return this.info?.prev;
  }

  onFetchNext() {
    this.fetchNext.emit();
  }

  onFetchPrev() {
    this.fetchPrev.emit();
  }
}
