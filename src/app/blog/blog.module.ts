import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    BlogRoutingModule,
  ],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
