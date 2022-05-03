import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-training';

  constructor(private characterService: CharacterService) {}

  currentPage: undefined | Page<Character[]>;

  onSearch(name: string) {
    console.log(name);
    this.characterService.searchForCharacter(name).subscribe(
      (result) => (this.currentPage = result),
      () => {
        this.currentPage = undefined;
      }
    );
  }

  fetchNext() {
    this.characterService
      .getPage(this.currentPage!.info!.next!)
      .subscribe((result) => (this.currentPage = result));
  }

  fetchPrev() {
    this.characterService
      .getPage(this.currentPage!.info!.prev!)
      .subscribe((result) => (this.currentPage = result));
  }

  get moreCharsAvailable() {
    return this.currentPage?.info?.next || this.currentPage?.info?.prev;
  }

  get charactersOnPage() {
    return this.currentPage === undefined ? [] : this.currentPage.results;
  }
}
