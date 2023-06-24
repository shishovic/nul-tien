import { Component, EventEmitter, Output } from "@angular/core";
import { BlogCategories, BlogCategoryObject } from "../../models/blog.models";
import { getBlogCategories } from "../../utils/blog.helper";


@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {
  @Output() setCategory = new EventEmitter<BlogCategories>();

  categories: BlogCategoryObject[] = getBlogCategories();
  activeCategory!: BlogCategories;

  selectCategory(value: BlogCategories): void {
    this.activeCategory = (this.activeCategory === value ? undefined : value) as BlogCategories;
    this.setCategory.next(value)
  }

}
