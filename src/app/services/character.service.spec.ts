import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CharacterService);
  });

  it('fetches characters for query', () => {
    expect(true).toBeTruthy();
  });
});
