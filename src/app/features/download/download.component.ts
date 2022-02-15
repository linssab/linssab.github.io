import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  tableTemplateCaller = [
    {
      header: "Date",
      nameProp: "date"
    }, {
      header: "Version",
      nameProp: "ver"
    }, {
      header: "Note",
      nameProp: "note"
    }, {
      header: "x64",
      nameProp: "x64"
    }, {
      header: "x86",
      nameProp: "x86"
    }
  ]

  arrayDataCaller = [
    {
      date: "September 2021",
      ver: "v2.4.3",
      note: "Update",
      x64: "LINK - x64",
      x86: "LINK - x86"
    }, {
      date: "March 2021",
      ver: "v2.2.1",
      note: "Update",
      x64: "LINK - x64",
      x86: "LINK - x86"
    }, {
      date: "January 2021",
      ver: "v2.0.1",
      note: "Patch",
      x64: "LINK - x64",
      x86: "LINK - x86"
    }, {
      date: "",
      ver: "v2.0.0",
      note: "Installer",
      x64: "LINK - x64",
      x86: "LINK - x86"
    }, {
      date: "",
      ver: "v1.3.2.1",
      note: "Installer (Legacy)",
      x64: "LINK - x64",
      x86: "LINK - x86"
    }, {
      date: "",
      ver: "v1.3.1",
      note: "Installer",
      x64: "LINK - x64",
      x86: "LINK - x86"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
