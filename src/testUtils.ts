import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function selectElementByDataId(
  fixture1: ComponentFixture<any>,
  selector: string
) {
  return fixture1.debugElement.query(
    By.css('[data-testid="' + selector + '"]')
  );
}
