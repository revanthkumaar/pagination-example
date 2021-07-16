import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { analyzeFileForInjectables } from '@angular/compiler';

const baseurlForPassengers = 'https://api.instantwebtools.net/v1/passenger';
const SearchTitleUrl = 'http://api.plos.org/search';
let urlToCall = '';
@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}
 
  getPaginatedInfo(params: any): Observable<any> {

    if (params.searchTitle) {
      urlToCall = baseurlForPassengers;
    } else {
      urlToCall = SearchTitleUrl;
    }

    const { pageNum, sizePage, searchTitle } = params;
    //this.http.get(url,options)
    return this.http.get<any>(urlToCall);
  }
}
