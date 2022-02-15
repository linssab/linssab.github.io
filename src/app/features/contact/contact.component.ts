import { Component, OnInit } from '@angular/core';
import { Dummy, VersionRecord } from '../history/models/versionRecord';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  model: any = {
    version: "",
    changelog: new Array<string>()
  }

  public arrayData = new Array<VersionRecord>();

  public minlengthChangelog: number = 10;
  public minlengthVersion: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    var entrata = new VersionRecord;
    entrata.version = this.model.version;
    entrata.changelog = this.model.changelog;
    this.arrayData.push(entrata);
    console.log(this.arrayData);
  }

}
