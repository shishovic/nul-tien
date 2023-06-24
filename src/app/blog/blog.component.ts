import { Component, OnInit } from '@angular/core';
import { BlogPost } from './models/blog.models';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: BlogPost[] = [];

  constructor(private blogService: BlogService) {

  }
  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data: BlogPost[]) => this.blogs = data);
  }
}
