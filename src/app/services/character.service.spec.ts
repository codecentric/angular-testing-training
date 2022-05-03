import { TestBed } from '@angular/core/testing';
import * as rickmortyapi from 'rickmortyapi';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterService],
    });
    service = TestBed.inject(CharacterService);
  });

  it('fetches characters for query', () => {
    spyOn(rickmortyapi, 'getCharacters').and.callThrough();

    service.searchForCharacter('rick').subscribe((val) => console.log(val));
  });
});
