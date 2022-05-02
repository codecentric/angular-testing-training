import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent {

  searchForm = new FormGroup({
    searchValue: new FormControl('')
  })

  @Output()
  submitted = new EventEmitter<string>()

  onSubmit() {
    this.submitted.emit(this.searchForm.value.searchValue);
    this.searchForm.reset()
  }

}
