import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';

@NgModule({
  declarations: [AppComponent, SubmitbuttonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
