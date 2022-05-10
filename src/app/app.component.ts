import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doggo-world';

  dogSays: undefined | string;

  dogs: Dog[] = [
    {
      name: 'Fido',
      image: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_2980.jpg',
      bark: 'Woof!',
    },
    {
      name: 'Barney',
      image: 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_6167.jpg',
      bark: 'Barkbark!',
    },
    {
      name: 'Jojo',
      image:
        'https://images.dog.ceo/breeds/retriever-golden/n02099601_8429.jpg',
      bark: 'Grrrwoof!',
    },
  ];

  bark(bark: string) {
    this.dogSays = `Dog says: "${bark}"`;
  }
}
