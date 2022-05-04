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
    this.characterService.searchForCharacter(name).subscribe({
      next: (value) => (this.currentPage = value),
      error: () => (this.currentPage = undefined),
    });
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

  get moreCharsAvailable(): boolean {
    return Boolean(
      this.currentPage?.info?.next || this.currentPage?.info?.prev
    );
  }

  get charactersOnPage() {
    return this.currentPage === undefined ? [] : this.currentPage.results;
  }
}
