import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  arrayLink = [
    { label: "Home", routerLink: "/Home" }
  ];

  @Output() dropNavBar = new EventEmitter();

  valoreDaPassareInOutput?: string;

  isCollapsed = false;

  emitClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}

