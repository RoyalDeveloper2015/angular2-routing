import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
            <a href='/route1'> Route1 </a>
            <a href='/route2'> Route2 </a>
            <router-outlet></router-outlet>
            `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
