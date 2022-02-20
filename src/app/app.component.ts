import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';
import { Component3 } from './components/component3/component3';
import { Component4 } from './components/component4/component4';
import { Component5 } from './components/component5/component5';
import { Component6 } from './components/component6/component6';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('mainContainer', { read: ViewContainerRef })
  mainContainer: ViewContainerRef;

  constructor() {}

  public ComponentList = [
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
  ];

  shuffle() {
    for (let i = this.ComponentList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.ComponentList[i];
      this.ComponentList[i] = this.ComponentList[j];
      this.ComponentList[j] = temp;
    }
    this.showView();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.showView();
  }

  showView() {
    this.mainContainer.clear();
    this.ComponentList.map((res) => {
      this.mainContainer.createComponent(res);
    });
  }
}
