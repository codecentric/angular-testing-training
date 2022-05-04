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

  onSubmit() {}

  get formIsInvalid() {
    return false;
  }
}
