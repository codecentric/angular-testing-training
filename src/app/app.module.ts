import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component';
import { MoreCharsButtonsetComponent } from './components/more-chars-buttonset/more-chars-buttonset.component';
import { DogComponent } from './components/dog/dog.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitbuttonComponent,
    SearchfieldComponent,
    CharacterComponent,
    MoreCharsButtonsetComponent,
    DogComponent,
    DogFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
