import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BsModalRef } from "ngx-bootstrap/modal";
import { BlogFormControls, BlogPost } from "../../models/blog.models";

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBlogPostComponent implements OnInit {
  @Input() blog!: BlogPost;
  @Input() submitAction!: (data: BlogPost) => void;

  blogForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.blogForm.patchValue({
      title: this.blog.title,
      description: this.blog.description,
    })
  }

  get headingTitle(): string {
    return `${!!this.blog ? 'Edit' : 'Add'} blog post`
  }

  get titleControl(): FormControl {
    return this.blogForm.controls[BlogFormControls.TITLE] as FormControl;
  }

  get textControl(): FormControl {
    return this.blogForm.controls[BlogFormControls.DESCRIPTION] as FormControl;
  }

  submit(): void {
    this.blogForm.markAllAsTouched();
    if (this.blogForm.valid) {
      const payload = {
        ... this.blog,
        ... this.blogForm.getRawValue()
      }
      this.submitAction(payload)
      this.cancel();
    }
  }

  cancel(): void {
    this.bsModalRef.hide();
  }
}
