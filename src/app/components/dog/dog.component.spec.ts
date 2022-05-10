import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './dog.component';
import { By } from '@angular/platform-browser';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogComponent],
    }).compileComponents();
  });

  const expectedDog: Dog = {
    name: 'Bello',
    image: 'https://dogapi/fido.jpg',
    bark: 'Woof',
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent);

    component = fixture.componentInstance;
    component.dog = expectedDog;
    fixture.detectChanges();
  });

  it('shows the image taken from the url of the passed dog', () => {
    const image = fixture.debugElement.query(By.css('[alt="Image of Bello"]'));

    expect(image.nativeElement.getAttribute('src')).toEqual(expectedDog.image);
  });

  it('shows a "bark" button that emits the passed dogs bark', () => {
    const button = fixture.debugElement.query(By.css('button'));
    let actualBark: string | undefined;
    component.onBark.subscribe((bark) => (actualBark = bark));

    button.nativeElement.click();

    expect(button.nativeElement.innerHTML).toEqual('Bark!');
    expect(actualBark).toEqual(expectedDog.bark);
  });
});
