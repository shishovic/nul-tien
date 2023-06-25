import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Identifier } from "src/app/shared/core/models/core.models";
import { BlogCategories, BlogPost } from "../models/blog.models";
import { mockBlogData } from "../utils/blog.helper";

@Injectable()
export class BlogService {

  blogs: BlogPost[] = mockBlogData();

  getAllBlogs(category?: BlogCategories): Observable<BlogPost[]> {
    if (!category) return of(this.blogs);

    return of(this.blogs.filter(({ category: cat }: BlogPost) => cat === category))
  }

  getBlogsByCategory(category: BlogCategories): Observable<BlogPost[]> {
    return of(this.blogs.filter(({ category: cat }: BlogPost) => cat === category))
  }

  updateBlog(blog: BlogPost): Observable<BlogPost> {
    this.blogs = this.blogs.map((item) => ({
      ...item,
      title: item.id === blog.id ? blog.title : item.title,
      description: item.id === blog.id ? blog.description : item.description,
    }))
    return of(blog)
  }

  deleteBlog(id: Identifier): Observable<BlogPost[]> {
    this.blogs = [... this.blogs].filter((item) => item.id !== id);
    return of(this.blogs)
  }
}
