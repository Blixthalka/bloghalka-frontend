import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blixthalka';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
      (<any>window).ga('set', 'page', event.urlAfterRedirects);
      (<any>window).ga('send', 'pageview');
     }
   });
  }
  sendEvent = (label: String) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'click',
      eventLabel: label,
      eventAction: 'click',
      eventValue: 1
    });

 }
}
