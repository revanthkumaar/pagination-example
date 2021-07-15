import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeFileForInjectables } from '@angular/compiler';

const baseurl = 'https://api.instantwebtools.net/v1/passenger';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  getPaginatedInfo(pageNum: any,sizePage: any): Observable<any> {
    return this.http.get<any>(`${baseurl}?page={pageNum}&size{sizePage}`);
  }

}
