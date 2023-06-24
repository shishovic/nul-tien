import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class HeaderService {
  private searchSubject$: BehaviorSubject<string> = new BehaviorSubject('');

  public updateSearchSubject(val: string): void {
    this.searchSubject$.next(val);
  }

  public getSearchObservable(): Observable<string> {
    return this.searchSubject$.asObservable();
  }
}
