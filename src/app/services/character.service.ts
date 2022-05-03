import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  searchForCharacter(name: string) {
    return this.httpClient.get<Info<Character[]>>(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
  }

  getPage(url: string) {
    return this.httpClient.get<Info<Character[]>>(url);
  }
}
