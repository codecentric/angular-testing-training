import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfieldComponent } from './searchfield.component';
import { selectElementByDataId } from '../../../testUtils';
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

  it('renders an input field of type text', () => {
    const inputElement = selectElementByDataId(fixture, 'search-input');

    expect(inputElement.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('emits the submitted value', () => {
    const inputElement = selectElementByDataId(fixture, 'search-input');
    typeInto(inputElement, 'search value');
    fixture.detectChanges();

    const submitButton = selectElementByDataId(fixture, 'custom-submit-button');

    let submittedValue: string | undefined;
    component.submitted.subscribe((value) => (submittedValue = value));

    submitButton.nativeElement.click();

    expect(submittedValue).toEqual('search value');
  });

  it('clears the search field after submit', () => {
    let inputElement = selectElementByDataId(fixture, 'search-input');

    let value = 'search value';
    typeInto(inputElement, value);
    fixture.detectChanges();

    const submitButton = selectElementByDataId(fixture, 'custom-submit-button');
    submitButton.nativeElement.click();

    expect(inputElement.nativeElement.value).toEqual('');
  });

  it('disables the submit button when the input is empty', () => {
    const submitButton = selectElementByDataId(fixture, 'custom-submit-button');

    expect(submitButton.nativeElement.getAttribute('disabled')).not.toBeNull();
  });
});
