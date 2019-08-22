import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';


import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {headers})
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers}
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
