import { Component } from "@angular/core";
import { BlogCategories, BlogCategoryObject } from "../../models/blog.models";
import { getBlogCategories } from "../../utils/blog.helper";
import { CategoryService } from "./blog-category.service";


@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {
  constructor(private categoryService: CategoryService) { }
  categories: BlogCategoryObject[] = getBlogCategories();
  activeCategory!: BlogCategories;

  selectCategory(value: BlogCategories): void {
    this.activeCategory = (this.activeCategory === value ? undefined : value) as BlogCategories;
    this.categoryService.updateCategory(this.activeCategory)
  }

}
