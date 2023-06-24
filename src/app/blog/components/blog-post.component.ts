import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BlogPost } from "../models/blog.models";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent {
  @Input() blog!: BlogPost;
}
