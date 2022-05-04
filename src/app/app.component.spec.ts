import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import { CharacterService } from './services/character.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, SearchfieldComponent, SubmitbuttonComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [CharacterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should query for a given character', () => {});

  it('fetches the next link from the current page', () => {});

  it('fetches previous link from the current page', () => {});

  it('returns false for "moreCharactersAvailable" if currentPage is undefined', () => {});
  it('returns true for "moreCharactersAvailable" if currentPage has next page', () => {});
  it('returns true for "moreCharactersAvailable"  if currentPage has prev page', () => {});

  it('returns empty array of characters if currentPage is undefined', () => {});

  it('returns array of characters if currentPage is defined and has characters', () => {});
});
