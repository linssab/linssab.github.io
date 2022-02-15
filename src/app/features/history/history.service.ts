import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { VersionRecord } from './models/versionRecord';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {

  private baseUrl = "https://raw.githubusercontent.com/linssab/XISMuS/master/history.json";
  constructor(private http: HttpClient) { }

  getAll(): Observable<VersionRecord[]> {
    return this.http.get<VersionRecord[]>(`${this.baseUrl}`);
  }

  getOne(id: number) {
    this.http.get(`${this.baseUrl}/history.json/${id}`)
      .subscribe(
        (item) => { console.log(item) },
      );
  }

}
