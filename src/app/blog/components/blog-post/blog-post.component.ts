import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Identifier } from "src/app/shared/core/models/core.models";
import { BlogPost } from "../../models/blog.models";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent {
  @Input() blog!: BlogPost;

  @Output() editRequest = new EventEmitter<BlogPost>();
  @Output() deleteRequest = new EventEmitter<Identifier>();

  bsModalRef?: BsModalRef;

  editPost(data: BlogPost): void {
    this.editRequest.next(data);
  }

  deletePost({ id }: BlogPost): void {
    this.deleteRequest.next(id);
  }
}
