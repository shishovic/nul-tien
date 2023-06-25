import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Identifier } from "src/app/shared/core/models/core.models";
import { HeaderService } from "src/app/shared/core/services/header.service";
import { BlogCategories, BlogPost } from "../../models/blog.models";
import { CategoryService } from "../../services/blog-category.service";
import { BlogModalService } from "../../services/blog-modal.service";
import { BlogService } from "../../services/blog.service";
import { searchFilters } from "../../utils/blog.helper";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {

  // our Category/Search subscription holders
  private categorySubscription!: Subscription;
  private searchSubscription!: Subscription;

  originalBlogs: BlogPost[] = [];
  blogs: BlogPost[] = [];

  constructor(
    private blogService: BlogService,
    private modalService: BlogModalService,
    private headerService: HeaderService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getBlogs(this.getCurrentCategory);

    this.categorySubscription = this.categoryService
      .getCategoryObservable()
      .subscribe((item) => this.getBlogs(item))

    this.searchSubscription = this.headerService
      .getSearchObservable()
      .subscribe((search: string) => {
        this.blogs = searchFilters(this.originalBlogs, search);
      })
  }

  // clean up our subscriptions OnDestroy
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

  getBlogs(category?: BlogCategories): void {
    this.blogService
      .getAllBlogs(category)
      .subscribe((blogs) => {
        this.blogs = blogs;
        this.originalBlogs = [... this.blogs];
      });
  }

  get getCurrentCategory(): BlogCategories {
    return this.categoryService.getCurrentCategory() as BlogCategories;
  }

  public updateBlog(blog: BlogPost): void {
    this.blogService
      .updateBlog(blog)
      .subscribe(() => this.getBlogs(this.getCurrentCategory))
  }

  public deletePost(id: Identifier): void {
    this.blogService
      .deleteBlog(id)
      .subscribe(() => this.getBlogs(this.getCurrentCategory))
  }

  public editPost(blog: BlogPost): void {
    this.modalService.openEditPostModal(blog, this.updateBlog.bind(this))
  }

  public openAddPost(): void {
    this.modalService.openAddPostModal(() => console.log('Bla'));
  }
}
