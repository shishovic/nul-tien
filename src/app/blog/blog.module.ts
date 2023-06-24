import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AddBlogPostComponent } from './components/add-blog-post/add-blog-post.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    AddBlogPostComponent,
    BlogCategoriesComponent,
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogService],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
