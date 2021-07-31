import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl, httpOptions } from '../commons.service';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  constructor(private http: HttpClient)  { }

  postShortenUrl(url: string): Observable<any> {
    const params = new HttpParams().set("url", url);
    return this.http.post(baseurl + "/api/shortener?url=" + url, httpOptions);
  }

  getDecodedUrl(url: string): Observable<any> {
    const params = new HttpParams().set("url", url);
    return this.http.get(baseurl + "/api/shortener?url=" + url, httpOptions);
  }
}
