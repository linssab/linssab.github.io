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
      x64: "https://sourceforge.net/projects/xismus/files/XISMuS-v2.4.3-Update.exe/download",
      x86: "https://sourceforge.net/projects/xismus/files/XISMuS-v2.4.3-Update.exe/download",
    }, {
      date: "April 2021",
      ver: "v2.2.1",
      note: "Update",
      x64: "https://sourceforge.net/projects/xismus/files/XISMuS-v2.2.1-Update.exe/download",
      x86: "https://sourceforge.net/projects/xismus/files/XISMuS-v2.2.1-Update.exe/download",
    }, {
      date: "February 2021",
      ver: "v2.0.1",
      note: "Patch",
      x64: "https://sourceforge.net/projects/xismus/files/XISMuS-v2.0.1-Patch.exe/download",
      x86: "https://sourceforge.net/projects/xismus/files/XISMuS-v2.0.1-Patch.exe/download",
    }, {
      date: "February 2021",
      ver: "v2.0.0",
      note: "Installer",
      x64: "https://sourceforge.net/projects/xismus/files/XISMuSx64_2.0.0_Setup.exe/download",
      x86: "https://sourceforge.net/projects/xismus/files/XISMuSx86_2.0.0_Setup.exe/download"
    }, {
      date: "January 2021",
      ver: "v1.3.2.1",
      note: "Installer (Legacy)",
      x64: "https://sourceforge.net/projects/xismus/files/XISMuSx64_1.3.2.1_Setup.exe/download",
      x86: "https://sourceforge.net/projects/xismus/files/XISMuSx86_1.3.2.1_Setup.exe/download"
    }, {
      date: "November 2020",
      ver: "v1.3.1",
      note: "Installer",
      x64: "https://drive.google.com/file/d/1ODY5wntTkgfXX1LiYSpFtR3Rg3_MxFhj/view?usp=sharing",
      x86: "https://drive.google.com/file/d/1eAzSeQq0Te3xoh3XhbAPmNnW3gnl0hgo/view?usp=sharing"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
