import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularWebPage';

  links = [
    "index",
    "download",
    "history",
    "contact",
    "tutorials"
  ];

  disableButton(): void {

  }

  stampaValue(value: string) {
    console.log(value);
  }

}
