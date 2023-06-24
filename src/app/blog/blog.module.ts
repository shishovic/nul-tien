import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './components/blog-post.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [BlogService],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
