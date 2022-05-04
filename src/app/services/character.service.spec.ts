import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockResult } from '../../testdata/mockdata';

describe('CharacterService', () => {
  let service: CharacterService;
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('fetches characters for query', () => {
    let actualValue: Object | undefined;
    service.searchForCharacter('rick').subscribe({
      next: (v) => (actualValue = v),
    });

    let testRequest = controller.expectOne(
      'https://rickandmortyapi.com/api/character/?name=rick'
    );

    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush({ foo: 'bar' });
    controller.verify();
    expect(actualValue).toEqual({ foo: 'bar' });
  });

  it('fetches given url', () => {
    let actualValue: Page<Character[]> | undefined;
    service.getPage('someUrl').subscribe({
      next: (v) => (actualValue = v),
    });

    let req = controller.expectOne('someUrl');

    expect(req.request.method).toEqual('GET');
    req.flush(mockResult);
    controller.verify();

    expect(actualValue).toEqual(mockResult);
  });
});
