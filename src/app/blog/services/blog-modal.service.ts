import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { AddBlogPostComponent } from "../components/add-blog-post/add-blog-post.component";
import { BlogPost } from "../models/blog.models";

@Injectable()
export class BlogModalService {
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openAddPostModal(submitAction: () => void): void {
    const state: ModalOptions = {
      initialState: {
        submitAction: () => submitAction()
      }
    }

    this.bsModalRef = this.modalService.show(AddBlogPostComponent, state);
  }

  public openEditPostModal(blog: BlogPost, submitAction: (blog: BlogPost) => void): void {
    const state: ModalOptions = {
      initialState: {
        blog,
        submitAction
      }
    }
    this.bsModalRef = this.modalService.show(AddBlogPostComponent, state);
  }
}
