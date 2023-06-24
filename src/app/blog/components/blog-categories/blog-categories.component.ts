import { Component, EventEmitter, Output } from "@angular/core";
import { BlogCategories, BlogCategoryObject } from "../../models/blog.models";
import { getBlogCategories } from "../../utils/blog.helper";


@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {

  @Output() setCategory = new EventEmitter<BlogCategories | null>();
  categories: BlogCategoryObject[] = getBlogCategories();

  activeCategory!: BlogCategories | null;

  selectCategory(value: BlogCategories | null): void {
    if (value === this.activeCategory) value = null;
    this.activeCategory = value;
    this.setCategory.next(value)
  }

}
