import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { HistoryService } from './history.service';
import { VersionRecord } from './models/versionRecord';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit, OnDestroy {

  subscription?: Subscription;

  tableTemplateCaller = [
    {
      header: "Version",
      nameProp: "version"
    }, {
      header: "Changelog",
      nameProp: "changelog"
    }
  ]

  collectedData: VersionRecord[] = [];

  /*collectedData = [
    {
      version: "v2.4.3",
      changelog: [
        "Aggiornamento 1",
        "Aggiornamento 2",
        "Aggiornamento 3"
      ]
    }, {
      version: "v2.3.1",
      changelog: [
        "Aggiornamento 1",
        "Aggiornamento 2",
        "Aggiornamento 3"
      ]
    }
  ]*/

  private pageLim: number = 25;

  constructor(
    private historyService: HistoryService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.historyService.getAll()
      .subscribe(
        (array) => {
          array
            .slice(0, this.pageLim)
            .forEach(item => this.collectedData.push(item));
        },
    );
  }

}
