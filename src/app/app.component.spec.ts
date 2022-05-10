import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import { CharacterService } from './services/character.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DogComponent } from './components/dog/dog.component';

describe('AppComponent', () => {
  let mockCharacterService: CharacterService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DogComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    mockCharacterService = TestBed.inject(CharacterService);
  });

  const expectedDogs: Dog[] = [
    {
      name: 'Dennis',
      image: 'https://doggos.com/dennis',
      bark: 'awoof',
    },
    {
      name: 'Kevin',
      image: 'https://doggos.com/kevin',
      bark: 'wooof',
    },
  ];

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.dogs = expectedDogs;
    fixture.detectChanges();
  });

  const mockObject: any = Object.seal({ foo: 'bar' });

  it('shows a list of dogs', () => {
    const dogs = fixture.debugElement.queryAll(By.css('app-dog'));

    expect(dogs.length).toEqual(2);
  });

  it('lets a dog bark its bark when clicking the respective bark button', () => {
    const dogs = fixture.debugElement.queryAll(By.css('app-dog'));
    const barkButton = dogs[0].query(By.css('button'));

    barkButton.nativeElement.click();
    fixture.detectChanges();

    const bark = fixture.debugElement.query(By.css('p[data-testid="bark"]'));

    const expectedDog = expectedDogs[0];
    const expectedText = `Dog says: "${expectedDog.bark}"`;

    expect(bark.nativeElement.innerText).toEqual(expectedText);
  });
});
