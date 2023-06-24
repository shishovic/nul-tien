import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Identifier } from '../shared/core/models/core.models';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { BlogPost } from './models/blog.models';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  bsModalRef?: BsModalRef;

  blogs: BlogPost[] = [];

  constructor(
    private blogService: BlogService,
    private modalService: BsModalService
  ) { }


  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService
      .getAllBlogs()
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

  updateBlog(blog: BlogPost): void {
    this.blogService.updateBlog(blog).subscribe(() => this.getBlogs())
  }

  deletePost(id: Identifier): void {
    this.blogService
      .deleteBlog(id)
      .subscribe(item => this.getBlogs())
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
