import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
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

  blogForm: UntypedFormGroup = new UntypedFormGroup({
    title: new UntypedFormControl('', Validators.required),
    description: new UntypedFormControl('', Validators.required)
  })

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    if (!this.blog) return;

    this.blogForm.patchValue({
      title: this.blog.title,
      description: this.blog.description,
    })
  }

  get formValid(): boolean {
    const { touched, dirty, valid } = this.blogForm;
    return (touched || dirty) && !valid;
  }

  get headingTitle(): string {
    return `${this.blog ? 'Edit' : 'Add'} blog post`
  }

  get titleControl(): UntypedFormControl {
    return this.blogForm.get(BlogFormControls.TITLE) as UntypedFormControl;
  }

  get textControl(): UntypedFormControl {
    return this.blogForm.get(BlogFormControls.DESCRIPTION) as UntypedFormControl;
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
