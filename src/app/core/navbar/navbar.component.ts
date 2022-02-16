import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

}

