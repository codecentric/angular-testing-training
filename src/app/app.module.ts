import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitbuttonComponent,
    SearchfieldComponent,
    CharacterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
