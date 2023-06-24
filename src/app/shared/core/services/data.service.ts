import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url)
  }

  post<T, K>(url: string, payload: K): Observable<T> {
    return this.httpClient.post<T>(url, payload);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
  }

  update<T, K>(url: string, payload: K): Observable<T> {
    return this.httpClient.put<T>(url, payload);
  }
}
