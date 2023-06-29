import { Component } from "@angular/core";
import { BlogCategories, BlogCategoryObject } from "../../models/blog.models";
import { CategoryService } from "../../services/blog-category.service";
import { getBlogCategories } from "../../utils/blog.helper";
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
