import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitbuttonComponent } from './submitbutton.component';
import { Component, EventEmitter } from '@angular/core';
import { selectElementByDataId } from '../../../test';

@Component({
  template: ` <app-submitbutton
    [text]="text"
    (clicked)="onClicked()"
    [disabled]="disabled"
  ></app-submitbutton>`,
})
class TestHostComponent {
  text: string = 'a button';
  clicked = new EventEmitter();
  disabled = false;

  onClicked() {
    this.clicked.emit();
  }
}

describe('SubmitbuttonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, SubmitbuttonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders a submit button', () => {
    const button = selectElementByDataId(fixture, 'custom-submit-button');

    expect(button.nativeElement.getAttribute('type')).toEqual('submit');
  });

  it('shows displays the text passed by the "text" property', () => {
    component.text = 'click me';
    fixture.detectChanges();

    const button = selectElementByDataId(fixture, 'custom-submit-button');

    expect(button.nativeElement.innerText).toEqual('click me');
  });

  it('emits a clicked event on click', () => {
    let clicked = false;
    component.clicked.subscribe(() => (clicked = true));

    const button = selectElementByDataId(fixture, 'custom-submit-button');

    button.nativeElement.click();
    expect(clicked).toBeTruthy();
  });

  it('can be disabled by setting disabled to true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const button = selectElementByDataId(fixture, 'custom-submit-button');
    console.log(button.nativeElement);

    expect(button.nativeElement.getAttribute('disabled')).not.toBeNull();
  });
});
