import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css'],
})
export class SearchfieldComponent {
  searchForm = new FormGroup({
    searchValue: new FormControl('', [Validators.required]),
  });

  @Output()
  submitted = new EventEmitter<string>();

  get formIsInvalid() {
    return !this.searchForm.valid;
  }

  onSubmit() {
    this.submitted.emit(this.searchForm.value.searchValue);
    this.searchForm.setValue({ searchValue: '' });
    this.searchForm.reset();
  }
}
