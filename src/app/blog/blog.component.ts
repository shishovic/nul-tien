import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { Identifier } from '../shared/core/models/core.models';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { BlogCategories, BlogPost } from './models/blog.models';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  bsModalRef?: BsModalRef;

  blogs: BlogPost[] = [];
  activeCategory = new BehaviorSubject<BlogCategories | null>(null);

  constructor(
    private blogService: BlogService,
    private modalService: BsModalService
  ) { }


  ngOnInit(): void {
    this.getBlogs(this.activeCategory.value);
    this.activeCategory.subscribe((item) => {
      this.getBlogs(item)
    })
  }

  getBlogs(category?: BlogCategories | null): void {
    this.blogService
      .getAllBlogs(category)
      .subscribe((data: BlogPost[]) => this.blogs = data);
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

  setBlogCategory(category: BlogCategories | null): void {
    this.activeCategory.next(category)
  }

  updateBlog(blog: BlogPost): void {
    this.blogService
      .updateBlog(blog)
      .subscribe(() => this.getBlogs(this.activeCategory.value))
  }

  deletePost(id: Identifier): void {
    this.blogService
      .deleteBlog(id)
      .subscribe(() => this.getBlogs(this.activeCategory.value))
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
