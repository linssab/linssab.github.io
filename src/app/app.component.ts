import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'XISMuS - X-Ray Imaging Software for Multiple Samples';

  public constructor(router: Router, private titleServ: Title) {
    router.navigate(['/home'])
    this.setTitle( this.title );
  }

  public setTitle(newTitle: string) {
    this.titleServ.setTitle( newTitle );
  }

  links = [
    "home",
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
