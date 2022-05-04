import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import { CharacterService } from './services/character.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let mockCharacterService: CharacterService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, SearchfieldComponent, SubmitbuttonComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    mockCharacterService = TestBed.inject(CharacterService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  const mockObject: any = Object.seal({ foo: 'bar' });

  it('should query for a given character', () => {
    spyOn(mockCharacterService, 'searchForCharacter').and.returnValue(
      of(mockObject)
    );

    component.onSearch('rick');

    expect(mockCharacterService.searchForCharacter).toHaveBeenCalledOnceWith(
      'rick'
    );
    expect(component.currentPage).toEqual(mockObject);
  });

  it('fetches the next link from the current page', () => {
    let next = 'mockUrl';
    component.currentPage = {
      info: {
        next,
        count: 1,
        pages: 1,
        prev: null,
      },
    };

    spyOn(mockCharacterService, 'getPage').and.returnValue(of(mockObject));

    component.fetchNext();
    expect(mockCharacterService.getPage).toHaveBeenCalledOnceWith(next);
    expect(component.currentPage).toEqual(mockObject);
  });

  it('fetches previous link from the current page', () => {
    let prev = 'mockUrl';
    component.currentPage = {
      info: {
        next: null,
        count: 1,
        pages: 1,
        prev,
      },
    };

    spyOn(mockCharacterService, 'getPage').and.returnValue(of(mockObject));

    component.fetchPrev();
    expect(mockCharacterService.getPage).toHaveBeenCalledOnceWith(prev);
    expect(component.currentPage).toEqual(mockObject);
  });

  it('returns false for "moreCharactersAvailable" if currentPage is undefined', () => {
    component.currentPage = undefined;

    expect(component.moreCharsAvailable).toBeFalse();
  });
  it('returns true for "moreCharactersAvailable" if currentPage has next page', () => {
    component.currentPage = {
      info: {
        next: 'someUrl',
      } as Info,
    };

    expect(component.moreCharsAvailable).toBeTrue();
  });
  it('returns true for "moreCharactersAvailable"  if currentPage has prev page', () => {
    component.currentPage = {
      info: {
        prev: 'someUrl',
      } as Info,
    };

    expect(component.moreCharsAvailable).toBeTrue();
  });

  it('returns empty array of characters if currentPage is undefined', () => {
    component.currentPage = undefined;

    expect(component.charactersOnPage).toEqual([]);
  });

  it('returns array of characters if currentPage is defined and has characters', () => {
    component.currentPage = mockObject;

    expect(component.charactersOnPage).toEqual(mockObject.results);
  });
});
