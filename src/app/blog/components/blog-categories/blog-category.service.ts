import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BlogCategories } from "../../models/blog.models";

@Injectable()
export class CategoryService {
  private categorySubject$: BehaviorSubject<any> = new BehaviorSubject(null);

  public updateCategory(category: BlogCategories): void {
    this.categorySubject$.next(category);
  }

  public getCurrentCategory(): BlogCategories {
    return this.categorySubject$.getValue();
  }

  public getCategoryObservable(): Observable<BlogCategories> {
    return this.categorySubject$.asObservable() as Observable<BlogCategories>;
  }
}
