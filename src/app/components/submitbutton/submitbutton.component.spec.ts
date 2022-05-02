import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubmitbuttonComponent} from './submitbutton.component';
import {By} from '@angular/platform-browser';
import {Component, EventEmitter} from '@angular/core';

function selectElementByDataId(fixture1: ComponentFixture<any>, selector: string) {
  return fixture1.debugElement.query(By.css('[data-testid="' + selector + '"]'));
}

@Component({
  template: `
    <app-submitbutton [text]="text" (clicked)="onClicked()"></app-submitbutton>`
})
class TestHostComponent {
  text: string = 'a button';
  clicked = new EventEmitter()

  onClicked() {
    this.clicked.emit()
  }
}

describe('SubmitbuttonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, SubmitbuttonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders a submit button', () => {
    console.log(fixture.debugElement.nativeElement);
    const button = selectElementByDataId(fixture, 'custom-submit-button')

    expect(button.nativeElement.getAttribute('type')).toEqual('submit')
  });

  it('shows displays the text passed by the "text" property', () => {
    component.text = "click me";
    fixture.detectChanges();

    const button = selectElementByDataId(fixture, 'custom-submit-button')

    expect(button.nativeElement.innerHTML).toEqual('click me')
  })

  it('emits a clicked event on click', () => {
    let clicked = false
    component.clicked.subscribe(() => clicked = true)

    const button = selectElementByDataId(fixture, 'custom-submit-button')

    button.nativeElement.click()

    expect(clicked).toBeTruthy()
  })
});
