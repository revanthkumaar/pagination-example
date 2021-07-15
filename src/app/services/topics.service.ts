import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators'
import { analyzeFileForInjectables } from '@angular/compiler';

const baseurl = 'https://api.instantwebtools.net/v1/passenger';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  getPaginatedInfo(params:any): Observable<any> {

    const {pageNum,sizePage} = params;
      //this.http.get(url,options)
    return this.http.get<any>(`${baseurl}?page={pageNum}&size{sizePage}`);

    /*  
    options: {
       observe: 'body',
       responseType: 'json'
    }
    */


  }

}
