import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class HeaderService {
  private searchSubject$: BehaviorSubject<any> = new BehaviorSubject(null);

  public updateSearchSubject(val: any): void {
    this.searchSubject$.next(val);
  }

  public getSearchObservable(): Observable<any> {
    return this.searchSubject$.asObservable();
  }
}
