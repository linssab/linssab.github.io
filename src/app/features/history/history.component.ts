import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { VersionRecord } from './models/versionRecord';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

  tableTemplateCaller = [
    {
      header: "Version",
      nameProp: "version"
    }, {
      header: "Changelog",
      nameProp: "changelog"
    }
  ]

  collectedData = [
    {
      version: "v2.4.3",
      changelog: [
        "riga1",
        "riga2",
        "riga3"
      ]
    }, {
      version: "v2.3.1",
      changelog: [
        "riga1",
        "riga2",
        "riga3"
      ]
    }
  ]

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.historyService.getAll()
      .subscribe(
        (array) => { console.log(array) }
    );
  }

}
