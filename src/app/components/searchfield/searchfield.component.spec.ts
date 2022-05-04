import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfieldComponent } from './searchfield.component';
import { selectElementByDataId } from '../../../test';
import { SubmitbuttonComponent } from '../submitbutton/submitbutton.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

function typeInto(inputElement: DebugElement, value: string) {
  inputElement.nativeElement.value = value;
  inputElement.triggerEventHandler('input', {
    target: {
      value,
    },
  });
}

describe('SearchfieldComponent', () => {
  let component: SearchfieldComponent;
  let fixture: ComponentFixture<SearchfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchfieldComponent, SubmitbuttonComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders an input field of type text', () => {});

  it('emits the submitted value', () => {});

  it('clears the search field after submit', () => {});

  it('disables the submit button when the input is empty', () => {});
});
