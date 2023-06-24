import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { Identifier } from '../shared/core/models/core.models';
import { HeaderService } from '../shared/core/services/header.service';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { BlogCategories, BlogPost } from './models/blog.models';
import { BlogService } from './services/blog.service';
import { searchFilters } from './utils/blog.helper';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  bsModalRef?: BsModalRef;

  originalBlogs: BlogPost[] = [];
  blogs: BlogPost[] = [];

  private activeCategory$ = new BehaviorSubject<BlogCategories | undefined>(undefined);

  private categorySubscription!: Subscription;
  private searchSubscription!: Subscription;

  constructor(
    private blogService: BlogService,
    private modalService: BsModalService,
    private headerService: HeaderService
  ) { }


  ngOnInit(): void {
    this.getBlogs(this.activeCategory$.getValue());

    this.categorySubscription = this.activeCategory$
      .pipe(filter(Boolean))
      .subscribe((item) => this.getBlogs(item))

    this.searchSubscription = this.headerService
      .getSearchObservable()
      .subscribe((search: string) => {
        this.blogs = searchFilters(this.originalBlogs, search);
      })
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

  getBlogs(category?: BlogCategories): void {
    this.blogService
      .getAllBlogs(category)
      .subscribe((data: BlogPost[]) => {
        this.blogs = data;
        this.originalBlogs = [... this.blogs];
      });
  }

  editPost(data: BlogPost): void {
    const state: ModalOptions = {
      initialState: {
        blog: data,
        submitAction: this.updateBlog.bind(this)
      }
    }
    this.bsModalRef = this.modalService.show(AddBlogPostComponent, state);
  }

  setBlogCategory(category?: BlogCategories): void {
    this.activeCategory$.next(category)
  }

  updateBlog(blog: BlogPost): void {
    this.blogService
      .updateBlog(blog)
      .subscribe(() => this.getBlogs(this.activeCategory$.getValue()))
  }

  deletePost(id: Identifier): void {
    this.blogService
      .deleteBlog(id)
      .subscribe(() => this.getBlogs(this.activeCategory$.getValue()))
  }

  openAddPost(): void {
    const state: ModalOptions = {
      initialState: {
        submitAction: () => console.log('creating posts')
      }
    }
    this.bsModalRef = this.modalService.show(AddBlogPostComponent, state);
  }
}
