import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCharsButtonsetComponent } from './more-chars-buttonset.component';

describe('MoreCharsButtonsetComponent', () => {
  let component: MoreCharsButtonsetComponent;
  let fixture: ComponentFixture<MoreCharsButtonsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCharsButtonsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCharsButtonsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
