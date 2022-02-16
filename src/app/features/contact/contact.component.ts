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

  model1: any = {
    name: "",
    surname: "",
    email: "",
    institution: "",
    text: ""
  }

  public arrayData = new Array<VersionRecord>();

  public minlengthChangelog: number = 10;
  public minlengthVersion: number = 6;

  public minLenName: number = 4;
  public minLenSurname: number = 4;
  public minLenEmail: number = 7;
  public minLenInstitution: number = 10;
  public minLenText: number = 10;

  checkEmail() {
    console.log(this.model1.email)
  }

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
