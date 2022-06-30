import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template:`
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link'>Home</a></li>
      <li><a class='nav-link'>Product List</a></li>
    </ul>
  </nav>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}