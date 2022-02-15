import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() arrayData?: any[];

  @Input() tableTemplate?: { header: string, nameProp: string }[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.arrayData);
  }

  isArray(obj: any) {
    return Array.isArray(obj)
  }

}
