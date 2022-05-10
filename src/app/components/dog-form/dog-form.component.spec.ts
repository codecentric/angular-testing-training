import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFormComponent } from './dog-form.component';
import { By } from '@angular/platform-browser';

function findInputByLabeltext(
  fixture: ComponentFixture<DogFormComponent>,
  labelText: string
) {
  const labels = fixture.debugElement.queryAll(By.css('label'));
  const wantedLabel = labels.find((label) =>
    label.nativeElement.innerHTML.includes(labelText)
  );

  expect(wantedLabel).toBeDefined();
  const forValue = wantedLabel!.nativeElement.getAttribute('for');

  expect(forValue).not.toBeNull();
  const inputElement = fixture.debugElement.query(
    By.css(`input[id="${forValue}"]`)
  );

  expect(inputElement).not.toBeNull();

  return inputElement;
}

describe('DogFormComponent', () => {
  let component: DogFormComponent;
  let fixture: ComponentFixture<DogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a form with input name:', () => {
    const labelText = 'Name';

    const inputElement = findInputByLabeltext(fixture, labelText);

    expect(component).toBeTruthy();
  });
});
