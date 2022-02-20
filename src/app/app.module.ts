import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';
import { Component3 } from './components/component3/component3';
import { Component4 } from './components/component4/component4';
import { Component5 } from './components/component5/component5';
import { Component6 } from './components/component6/component6';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
  ],
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
